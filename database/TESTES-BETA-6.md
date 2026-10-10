# Beta 6.0 — checklist de testes

> Esta branch é de desenvolvimento. A Beta 5.0 publicada não foi alterada. Não use o simulador para eleições reais.

## Antes de testar o envio online

1. Revise `database/beta-6-migration-manual.sql`.
2. Faça backup/revisão do banco.
3. Execute a migração manualmente no SQL Editor do Supabase somente quando estiver autorizado.
4. Verifique que `count(*) = count(distinct vote_id)` na tabela `public.urna_votes`.
5. Confirme que a tabela continua com RLS habilitado e que as políticas de leitura/inserção esperadas continuam ativas.

## Fluxo de votação

- [ ] Digitar um número de candidatura e confirmar abre a tela de revisão, sem registrar ainda.
- [ ] Escolher **CORRIGIR** volta à tela de digitação.
- [ ] Escolher **CONFIRMAR VOTO** inicia uma única barra de processamento.
- [ ] As mensagens de processamento mudam enquanto o registro está sendo enviado.
- [ ] Um registro só é apresentado como confirmado após confirmação do servidor.
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

## Limites conhecidos a validar

- O armazenamento offline depende do armazenamento local do navegador; limpar os dados do site pode remover a fila.
- A interface não transforma um registro pendente em confirmado sem resposta do servidor.
- O projeto continua sendo apenas uma simulação educativa, não uma urna oficial nem um sistema de votação real.
