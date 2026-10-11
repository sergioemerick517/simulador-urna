# Preparação do site — lançamento 1.0

## Objetivo
Preparar a estrutura e os critérios de lançamento do site do Simulador da Urna sem alterar a versão do jogo, sem trocar os textos da Beta 6.0 e sem publicar mudanças no site principal.

## Regra de publicação
- A versão pública continua sendo a Beta 5.0 até autorização explícita do responsável pelo projeto.
- Esta branch é apenas de preparação; não configurar publicação automática a partir dela.
- Não criar tag/release 1.0 nem mesclar para a branch principal sem autorização.

## Estrutura proposta para o site 1.0
- **Página inicial:** nome do projeto, botão para abrir o simulador, resumo do propósito e aviso de que é uma simulação educacional independente.
- **Simulador:** área de votação com estados claros para início, digitação, revisão, processamento, confirmação e erro.
- **Resultados:** totais e gráficos com indicação de quando os dados foram atualizados; estados vazios e de falha de conexão.
- **Sobre o projeto:** explicação do propósito, limitações e tecnologias.
- **Privacidade e dados:** explicar quais dados de demonstração são guardados, por quanto tempo se souber, e como funcionam os registros compartilhados. Não prometer anonimato ou segurança sem validação.
- **Ajuda e acessibilidade:** instruções de uso, controles por teclado, foco visível, contraste e mensagens acessíveis.

## Critérios de prontidão para 1.0
- [ ] Fluxo completo de votação testado no navegador real, desktop e celular.
- [ ] Integração Supabase verificada em ambiente de teste, incluindo falhas de rede e duplicação.
- [ ] Nenhum segredo ou chave privilegiada no código público; usar somente chave pública apropriada e políticas RLS revisadas.
- [ ] Confirmar que o envio de votos de demonstração não é confundido com eleição real.
- [ ] Mensagens de carregamento, erro, sucesso e modo offline compreensíveis.
- [ ] Imagens dos candidatos carregam, com alternativa acessível se falharem.
- [ ] Painel de resultados testado com dados vazios, inválidos e reais de demonstração.
- [ ] Testes de teclado, leitores de tela básicos, contraste e telas pequenas.
- [ ] Links, navegação, documentação e instruções revisados.
- [ ] Revisão final de segurança e privacidade do banco.
- [ ] Aprovação explícita antes de publicar.

## Política de versões
1. **Beta 5.0:** versão pública atual até autorização em contrário.
2. **Beta 6.0:** desenvolvimento e testes em branch separada.
3. **Preparação do site 1.0:** conteúdo, estrutura e critérios de lançamento, sem publicar.
4. **Versão 1.0:** só após testes concluídos e autorização explícita.

## Aviso recomendado no site
> Este projeto é um simulador educacional independente. Não é operado, certificado nem endossado pela Justiça Eleitoral e não deve ser usado para registrar ou apurar votos de eleições reais.

## Nota de segurança
Votos inseridos no banco conectado podem aparecer para outros visitantes e afetar resultados compartilhados. Usar dados de teste e validar a configuração do banco antes de convidar outras pessoas a testar.
