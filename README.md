# My personal ESLint config

[![npm version](https://badge.fury.io/js/eslint-config-marsi.svg)](https://badge.fury.io/js/eslint-config-marsi) ![NPM downloads](https://img.shields.io/npm/dm/eslint-config-marsi) [![GitHub issues](https://img.shields.io/github/issues/marsidev/eslint-config-marsi)](https://github.com/marsidev/eslint-config-marsi/issues) [![Twitter Follow](https://img.shields.io/twitter/follow/marsigliacr?label=Follow%20on%20Twitter)](https://twitter.com/marsigliacr/)

These are settings for ESLint used for my personal projects.

## Installing

1. Install the config and dependencies:

  - Using [npm](https://www.npmjs.com)
    ```bash
    npm i eslint-config-marsi --save-dev
    npx install-peerdeps eslint-config-marsi --dev
    ```

  - Using [yarn](https://yarnpkg.com)
    ```bash
    yarn add eslint-config-marsi -D
    npx install-peerdeps eslint-config-marsi --yarn --dev
    ```

  - Using [pnpm](https://pnpm.io)
    ```bash
    pnpm add eslint-config-marsi -D
    npx install-peerdeps eslint-config-marsi --pnpm --dev
    ```

2. You will see several dependencies were installed. Now, create a `.eslintrc.json` file with the following content:

```js
{
  "extends": [
    "marsi"
  ]
}
```

---

Inspired by [eslint-config-leozera](https://github.com/leonardofaria/eslint-config-leozera).
