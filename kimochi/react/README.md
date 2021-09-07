# Eslint base config with typescript in practice

Basically, this base on `air-bnb-style` for typescript enterprise projects. It's good for DX and might be strict for consistency and professionalism.

Let's try this and it will never let you down! Hope you enjoy this with your team!

## Eslint base config includes

- eslint-config-airbnb
- eslint-config-prettier
- eslint-plugin-html
- eslint-plugin-import
- eslint-plugin-jest
- eslint-plugin-jsdoc
- eslint-plugin-jsonc
- eslint-plugin-promise
- eslint-plugin-simple-import-sort
- eslint-plugin-unicorn
- eslint-plugin-yml

## Install and Use

| Package Manager | Command                                              |
| --------------- | ---------------------------------------------------- |
| npm             | `npm i --save-dev @techmely/eslint-config-ts`        |
|                 | `npm i --save-dev @techmely/eslint-config-vue-ts`    |
|                 | `npm i --save-dev @techmely/eslint-config-react-ts`  |
|                 | `npm i --save-dev @techmely/eslint-config-svelte-ts` |
| yarn            | `yarn add -D @techmely/eslint-config-ts`             |
|                 | `yarn add -D @techmely/eslint-config-vue-ts`         |
|                 | `yarn add -D @techmely/eslint-config-react-ts`       |
|                 | `yarn add -D @techmely/eslint-config-svelte-ts`      |
| pnpm            | `pnpm add -D @techmely/eslint-config-ts`             |
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

For `.eslintrc` json file

```json
{
  "extends": ["@techmely/eslint-config-ts"],
  "parserOptions": {
    "tsconfigRootDir": "__dirname",
    "parser": "@typescript-eslint/parser",
    "project": ["tsconfig.json"],
    "ecmaFeatures": {
      "modules": true
    }
  }
}
```

### Note: You can change any rules which you want
