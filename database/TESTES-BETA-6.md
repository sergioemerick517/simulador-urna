# Beta 6.0 — checklist de testes

> Esta branch é de desenvolvimento. A Beta 5.0 publicada não foi alterada. Não use o simulador para eleições reais.

## Antes de testar o envio online

- [x] Migração `vote_id` aplicada ao projeto Supabase conectado.
- [x] Identificadores preenchidos e únicos nos 14 registros existentes durante a verificação.
- [x] RLS continua habilitado na tabela `public.urna_votes`.
- [ ] Confirmar em teste de navegador que a Beta 5.0 continua inserindo registros usando o valor padrão de `vote_id`.
- [ ] Confirmar em teste de navegador que a Beta 6.0 registra um voto com `vote_id` e que uma tentativa repetida não duplica o registro.
- Para reproduzir em outro projeto, revise `database/beta-6-migration-manual.sql`, faça backup e só então aplique a migração nesse ambiente.

## Fluxo de votação

- [x] Teste automatizado em Chromium: iniciar, digitar 13, abrir a revisão e confirmar.
- [x] Teste automatizado em Chromium: a barra de processamento avança durante a espera.
- [x] Teste automatizado em Chromium: a interface só exibe confirmação após a resposta simulada de sucesso do servidor.
- [ ] Testar manualmente **CORRIGIR**, voto em branco e número nulo.
- [ ] Verificar visualmente as mensagens alternadas durante o envio real.
- [ ] Voto em branco e número inválido seguem os caminhos de branco e nulo.

## Conexão e duplicação

- [ ] O indicador apresenta Online, Offline ou Sincronizando.
- [ ] Com a rede desligada, o registro aparece como pendente neste navegador, não no total online.
- [ ] Ao restaurar a conexão, a fila tenta sincronizar automaticamente.
- [ ] Se a resposta do servidor se perder depois de um insert bem-sucedido, repetir a tentativa com o mesmo `vote_id` não cria outro registro.
- [ ] Se a migração do banco não estiver aplicada, a interface informa que o registro não foi confirmado.
- [ ] Pendências não são descartadas caso a migração ainda não esteja aplicada.

## Resultados

- [ ] Totais de votos confirmados, branco, nulo e candidaturas batem com a tabela do Supabase.
- [ ] Percentuais usam o total de votos confirmados online.
- [ ] Gráfico de barras e gráfico de setores mostram as mesmas categorias e proporções.
- [ ] Votos pendentes locais aparecem em separado.
- [ ] Duas janelas abertas atualizam os resultados quando o Realtime notifica novos registros.

## Verificações já feitas

- [x] Sintaxe JavaScript validada sem erro.
- [x] IDs principais da interface presentes e sem IDs HTML duplicados.
- [x] Barra única usa a duração selecionada para o processamento.
- [x] Foto do Lula corrigida para usar a mesma codificação de URL das outras fotos do TSE.
- [x] Teste automatizado em navegador Chromium passou em 2026-10-11 (backend simulado, sem inserir votos reais).
- [ ] Teste manual com Supabase real, modo offline/online e fotos ainda pendente.

## Limites conhecidos a validar

- O armazenamento offline depende do armazenamento local do navegador; limpar os dados do site pode remover a fila.
- A interface não transforma um registro pendente em confirmado sem resposta do servidor.
- O projeto continua sendo apenas uma simulação educativa, não uma urna oficial nem um sistema de votação real.
