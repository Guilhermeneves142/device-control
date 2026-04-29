# Dashboard Device

Painel web para visualização de dispositivos e custos, desenvolvido com Vue 3, TypeScript e Vite.

## Tecnologias

- Vue 3
- TypeScript
- Vue Router
- Vite
- Chart.js
- VueUse
- Storybook (documentação e desenvolvimento isolado de UI)
- Vitest (testes unitários de componentes)
- Husky (hooks Git, p. ex. antes de commit)

## Requisitos

- Node.js 22.14 (recomendado)
- pnpm (recomendado) ou npm

## Instalação

Com pnpm:

```bash
pnpm install
```

Com npm:

```bash
npm install
```

## Scripts disponíveis

| Script | Descrição |
|--------|-----------|
| `pnpm dev` / `npm run dev` | Servidor de desenvolvimento Vite |
| `pnpm build` / `npm run build` | Build de produção com `vue-tsc` e checagem de tipos |
| `pnpm preview` / `npm run preview` | Servidor estático para validar o build local |
| `pnpm storybook` / `npm run storybook` | Storybook em **http://localhost:6006** |
| `pnpm build-storybook` / `npm run build-storybook` | Gera o Storybook estático |
| `pnpm test` / `npm run test` | Vitest em modo run (testes unitários) |
| `pnpm test:watch` / `npm run test:watch` | Vitest em modo watch |

## Mobile e layout responsivo

- O composable **`useMobileApp`** (`src/composables/useMobileApp.ts`) considera **mobile** quando a largura da janela é **≤ 768 px** (atualiza em `resize`).
- Para testar: redimensione o navegador ou use as ferramentas de dispositivo (DevTools).

## Storybook

- Catálogo de stories em `src/**/*.stories.ts` (ex.: componentes em `src/components/global/`).
- Documentação de **tokens de design** no grupo **Design System** (`src/stories/design-system/*.mdx`): cores, tipografia, espaçamentos e raios.
- O ficheiro **`.storybook/preview.ts`** importa **`src/style.css`**, para os stories terem os mesmos **tokens CSS** (`--color-*`, `--spacing-*`, etc.) que a aplicação. A fonte **Inter** é carregada em **`.storybook/preview-head.html`** para alinhar com `--font-family-base`.

## Vitest

- Configuração no **`vite.config.ts`**: ambiente **`happy-dom`**, padrão de ficheiros **`src/components/global/**/*.spec.ts`**.
- Testes com **`@vue/test-utils`**; foco em componentes globais (BaseButton, BaseCard, BaseInput, DropdownSelect, InfoCard, etc.).
- Comando principal: **`pnpm test`** (ou `npm run test`).

## Rotas principais

- `/dashboard`: visão geral do painel
- `/devices`: listagem e informações de dispositivos
- `/costs`: análise e detalhamento de custos
- `*`: página de não encontrado (`NotFound`)

## Estrutura básica

```txt
src/
  components/       # componentes reutilizáveis globais e de domínio
  composables/      # composables utilitários (ex.: formatação, useMobileApp)
  layouts/          # layout principal e componentes de navegação
  pages/            # páginas por módulo (dashboard, devices, costs)
  routes/           # configuração e definição das rotas
  styles/           # tokens e estilos globais
.storybook/         # configuração Storybook + preview (CSS global)
.husky/             # hooks Git (pre-commit, etc.)
```

## Desenvolvimento

1. Inicie o servidor:

   ```bash
   pnpm dev
   ```

2. Abra no navegador o endereço indicado no terminal (geralmente `http://localhost:5173`).

## Build de produção

```bash
pnpm build
pnpm preview
```
