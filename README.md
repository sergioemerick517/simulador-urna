# 🗳️ Simulador da Urna Eletrônica

<p align="center">
  <strong>Beta 6.0 · Simulação interativa de votação</strong><br>
  Uma experiência de demonstração inspirada na interface de votação brasileira.
</p>

<p align="center">
  <a href="https://sergioemerick517.github.io/simulador-urna/">
    <img src="https://img.shields.io/badge/▶%20ABRIR%20SIMULADOR-ACESSE%20ONLINE-16803c?style=for-the-badge" alt="Abrir o simulador online">
  </a>
  <img src="https://img.shields.io/badge/VERSÃO-BETA%206.0-16803c?style=for-the-badge" alt="Versão Beta 6.0">
  <img src="https://img.shields.io/badge/IDIOMA-PORTUGUÊS-6b4bb6?style=for-the-badge" alt="Idioma português">
</p>

---

## 🔎 Navegação rápida

- [🌐 Abrir o simulador](https://sergioemerick517.github.io/simulador-urna/)
- [✨ Funcionalidades](#-funcionalidades)
- [🧪 Como testar](#-como-testar)
- [🛠️ Tecnologias utilizadas](#️-tecnologias-utilizadas)
- [🗂️ Versões históricas](#️-versões-históricas)
- [⚠️ Aviso importante](#️-aviso-importante)

## 🌐 Sobre o projeto

O **Simulador da Urna Eletrônica** é um projeto independente criado para explorar uma experiência interativa de votação diretamente pelo navegador. A versão publicada é a **Beta 6.0**. A Beta 5.0 permanece disponível no histórico.

## ✨ Funcionalidades

- 🗳️ **Votação interativa:** siga as etapas da simulação pela interface.
- 🧑‍💼 **Candidatos com fotos:** identificação visual durante a votação.
- ⏳ **Processamento:** barra única animada com mensagens de status.
- 🔎 **Revisão do voto:** permite conferir a escolha e voltar para corrigir antes do registro.
- 📊 **Resultados detalhados:** gráficos de barras e setores, totais e percentuais.
- 🔊 **Feedback sonoro:** sons para complementar a interação.
- ☁️ **Registros online compartilhados:** armazenamento dos registros de demonstração no Supabase.
- 🔄 **Sincronização entre sessões:** permite testar o compartilhamento entre janelas ou navegadores.
- 📴 **Fila offline (Beta 6.0):** guarda registros pendentes no navegador e tenta sincronizar quando a conexão retorna; pendentes não contam como confirmados.
- 🛡️ **Prevenção de duplicações (Beta 6.0):** identificador persistente por registro, apoiado por restrição única no banco após aplicar a migração manual.
- 💻 **Sem instalação:** funciona pelo navegador.

## ✅ Estado da Beta 6.0

A Beta 6.0 é a versão principal publicada neste site. Os testes automatizados de regressão em Chromium passaram. A integração usa o projeto Supabase configurado e mantém a compatibilidade com os registros da Beta 5.0. A migração `database/beta-6-migration-manual.sql` serve como referência para reproduzir a configuração em outro ambiente. Este simulador é experimental e não deve ser usado em eleições reais. Veja `database/TESTES-BETA-6.md` para os testes e limitações conhecidos.

## 🧪 Como testar

1. Acesse o **[simulador online](https://sergioemerick517.github.io/simulador-urna/)**.
2. Siga as instruções mostradas na tela.
3. Complete uma votação de demonstração.
4. Para testar a experiência online, abra o simulador em outra janela ou navegador e observe os registros compartilhados.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso no projeto |
| --- | --- |
| **HTML** | Estrutura e elementos da página |
| **CSS** | Aparência, cores, espaçamento e layout |
| **JavaScript** | Interações, lógica da simulação, sons e atualização da interface |
| **SQL / PostgreSQL** | Estrutura e armazenamento de dados por meio do Supabase |
| **Supabase** | Serviço de banco de dados online |
| **GitHub Pages** | Hospedagem do simulador |

> **Sobre a seção “Languages” do GitHub:** parte do CSS e do JavaScript está incorporada ao arquivo `index.html`. Por isso, o indicador automático de linguagens pode destacar principalmente HTML. A tabela acima descreve as tecnologias utilizadas no projeto.

## 🗂️ Versões históricas e downloads

**📢 Aviso sobre as Releases:** o download é opcional. A Beta 4.1 e a Beta 5.0 podem ser usadas diretamente pelo navegador nos links abaixo, sem baixar arquivos. Quando os arquivos para download estiverem disponíveis, eles serão publicados na seção [Releases do GitHub](https://github.com/sergioemerick517/simulador-urna/releases).

- [**Beta 4.1** — abrir no navegador](https://sergioemerick517.github.io/simulador-urna/historico/beta-4.1/) <img src="https://img.shields.io/badge/STATUS-OFFLINE-ff6a00?style=for-the-badge" alt="Offline" height="22">
- [**Beta 5.0** — abrir no navegador](https://sergioemerick517.github.io/simulador-urna/historico/beta-5.0/) <img src="https://img.shields.io/badge/STATUS-ONLINE-16a34a?style=for-the-badge" alt="Online" height="22">

O download dos arquivos disponibilizados nas Releases é **opcional**. As versões históricas também continuam acessíveis diretamente pelos links do navegador acima. Cada versão é mantida separada da página principal para preservar a versão atual do simulador.

## ⚠️ Aviso importante

Este é um **projeto independente de demonstração**. Não é oficial, não possui afiliação com o Tribunal Superior Eleitoral (TSE) e **não deve ser usado em eleições reais**. Os registros armazenados servem apenas para testes e não oferecem as garantias de sigilo, segurança, auditoria e integridade exigidas em uma eleição oficial.

---

<p align="center">
  <strong>Projeto experimental · Beta 6.0</strong><br>
  Feito para explorar, testar e aprender. 💚💛
</p>
