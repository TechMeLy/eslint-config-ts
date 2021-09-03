# Eslint base config with typescript in practice

Basically, this base on `air-bnb-style` for typescript project

Hope you enjoy this with your team!

## Install and Use

| Package Manager | Command                                              |
| --------------- | ---------------------------------------------------  |
| npm             | `npm i --save-dev @techmely/eslint-config-ts`        |
|                 | `npm i --save-dev @techmely/eslint-config-vue-ts`    |
|                 | `npm i --save-dev @techmely/eslint-config-react-ts`  |
|                 | `npm i --save-dev @techmely/eslint-config-svelte-ts` |
| yarn            | `yarn add -D @techmely/eslint-config-ts`             |
|                 | `yarn add -D @techmely/eslint-config-vue-ts`         |
|                 | `yarn add -D @techmely/eslint-config-react-ts`       |
|                 | `yarn add -D @techmely/eslint-config-svelte-ts`      |
| pnpm            | `npm i --save-dev @techmely/eslint-config-ts`        |
|                 | `pnpm add -D @techmely/eslint-config-vue-ts`         |
|                 | `pnpm add -D @techmely/eslint-config-react-ts`       |
|                 | `pnpm add -D @techmely/eslint-config-svelte-ts`      |

In your `.eslintrc.js`. Just copy and paste this

```js
module.exports = {
  extends: ['@techmely/eslint-config-ts'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    parser: '@typescript-eslint/parser',
    // Depends on your project use whatever tsconfig.json file
    project: ['tsconfig.json'],
    ecmaFeatures: {
      modules: true,
    },
  },
};

```

Note: You can change any rules which you want
