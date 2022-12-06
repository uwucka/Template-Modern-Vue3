# Ready-made assembly for the project

## Features:

1. [Vue 3](https://vuejs.org/guide/introduction.html)
2. [TypeScript](https://www.typescriptlang.org/docs/)
3. [Pinia](https://pinia.vuejs.org/introduction.html)
4. [Router 4](https://router.vuejs.org/guide/)
5. [Vite](https://vitejs.dev/guide/)
6. [ESLint](https://eslint.org/docs/latest/)
7. [Stylelint](https://stylelint.io/user-guide/configure/)
8. [Prettier](https://prettier.io/docs/en/options.html)
9. [Jest](https://jestjs.io/docs/getting-started)
10. [Husky](https://typicode.github.io/husky/#/)
11. [Https](https://www.cloudflare.com/learning/ssl/what-is-https/)
12. [GitHub Actions](https://github.com/FiloSottile/mkcert)

## To create certificates for https:

1. Install [mkcert](https://github.com/FiloSottile/mkcert)
2. Use the command `npm cert` or `yarn cert`

# Default vue DOCS

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
