import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

const htmlPath = fileURLToPath(new URL('../index.html', import.meta.url));
const html = await readFile(htmlPath, 'utf8');
const inlineScripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
assert.ok(inlineScripts.length, 'HTML deve conter o script principal');
for (const script of inlineScripts) {
  const result = spawnSync(process.execPath, ['--check'], { input: script, encoding: 'utf8' });
  assert.equal(result.status, 0, `JavaScript deve ter sintaxe válida: ${result.stderr}`);
}

const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage();
  page.on('pageerror', error => { throw error; });
  await page.route('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2', route => route.fulfill({
    status: 200,
    contentType: 'application/javascript',
    body: `window.__fakeVotes=[];window.supabase={createClient:()=>({from:()=>({insert:async(vote)=>{window.__fakeVotes.push({...vote,created_at:new Date().toISOString()});return {error:null}},select:()=>({order:async()=>({data:window.__fakeVotes,error:null}),eq:()=>({maybeSingle:async()=>({data:{id:1},error:null})})})}),channel:()=>({on(){return this},subscribe(callback){callback('SUBSCRIBED');return this}})})};`
  }));
  await page.goto('http://127.0.0.1:4173/index.html');

  await page.getByRole('button', { name: 'INICIAR VOTAÇÃO' }).click();
  await page.getByRole('button', { name: /1, padrão Braille/ }).click();
  await page.getByRole('button', { name: /3, padrão Braille/ }).click();
  await page.getByRole('button', { name: 'Confirma' }).click();
  await page.getByRole('button', { name: 'CONFIRMAR VOTO' }).click();
  const fill = page.locator('#voteProgressFill');
  await fill.waitFor({ state: 'visible' });
  await page.waitForTimeout(180);
  const width = await fill.evaluate(el => parseFloat(el.style.width));
  assert.ok(width > 0, `barra de processamento deve avançar; largura observada: ${width}%`);
  await page.getByText('VOTO DE DEMONSTRAÇÃO CONFIRMADO ONLINE').waitFor({ timeout: 9000 });
  await page.waitForTimeout(3700);

  await page.getByRole('button', { name: /1, padrão Braille/ }).click();
  await page.getByRole('button', { name: /3, padrão Braille/ }).click();
  await page.getByRole('button', { name: 'Confirma' }).click();
  await page.getByRole('button', { name: 'CORRIGIR' }).click();
  assert.equal((await page.locator('.digit').first().textContent()).trim(), '', 'CORRIGIR deve limpar a digitação');
  await page.getByRole('button', { name: 'Voto em branco' }).click();
  await page.getByRole('button', { name: 'Confirma' }).click();
  await page.getByText('VOTO EM BRANCO').waitFor();
  await page.getByRole('button', { name: 'CONFIRMAR VOTO' }).click();
  await page.getByText('VOTO DE DEMONSTRAÇÃO CONFIRMADO ONLINE').waitFor({ timeout: 9000 });
  await page.waitForTimeout(3700);

  await page.getByRole('button', { name: /9, padrão Braille/ }).click();
  await page.getByRole('button', { name: /9, padrão Braille/ }).click();
  await page.getByRole('button', { name: 'Confirma' }).click();
  await page.getByText('VOTO NULO').waitFor();
  await page.getByRole('button', { name: 'CONFIRMAR VOTO' }).click();
  await page.getByText('VOTO DE DEMONSTRAÇÃO CONFIRMADO ONLINE').waitFor({ timeout: 9000 });

  const recorded = await page.evaluate(() => window.__fakeVotes.map(v => v.vote_type));
  assert.deepEqual(recorded, ['candidato', 'branco', 'nulo'], 'candidato, branco e nulo devem registrar corretamente');
  console.log('PASS: sintaxe, início, revisão, barra, correção, voto em branco, voto nulo e confirmação simulada.');
} finally {
  await browser.close();
}
