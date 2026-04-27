# Dashboard Device

Painel web para visualizacao de dispositivos e custos, desenvolvido com Vue 3, TypeScript e Vite.

## Tecnologias

- Vue 3
- TypeScript
- Vue Router
- Vite
- Chart.js
- VueUse

## Requisitos

- Node.js 20+ (recomendado)
- pnpm (recomendado) ou npm

## Instalacao

Com pnpm:

```bash
pnpm install
```

Com npm:

```bash
npm install
```

## Scripts disponiveis

- `pnpm dev` ou `npm run dev`: inicia o servidor de desenvolvimento
- `pnpm build` ou `npm run build`: gera build de producao com checagem de tipos
- `pnpm preview` ou `npm run preview`: sobe o servidor para visualizar o build local

## Rotas principais

- `/dashboard`: visao geral do painel
- `/devices`: listagem e informacoes de dispositivos
- `/costs`: analise e detalhamento de custos
- `*`: pagina de nao encontrado (`NotFound`)

## Estrutura basica

```txt
src/
  components/       # componentes reutilizaveis globais e de dominio
  composables/      # composables utilitarios (ex.: formatacao)
  layouts/          # layout principal e componentes de navegacao
  pages/            # paginas por modulo (dashboard, devices, costs)
  routes/           # configuracao e definicao das rotas
  styles/           # tokens e estilos globais
```

## Desenvolvimento

1. Inicie o servidor:
   ```bash
   pnpm dev
   ```
2. Abra no navegador o endereco exibido no terminal (geralmente `http://localhost:5173`).

## Build de producao

```bash
pnpm build
pnpm preview
```
