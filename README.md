# [marsidev](https://github.com/marsidev)'s ESLint config

<p align="center">
  <a href="https://npmjs.com/package/eslint-config-marsi"><img src="https://img.shields.io/npm/v/eslint-config-marsi.svg" alt="npm package"></a>
  <a href="https://npmjs.com/package/eslint-config-marsi"><img src="https://img.shields.io/npm/dm/eslint-config-marsi.svg" alt="npm downloads"></a>
  <a href="https://twitter.com/marsigliacr/"><img src="https://img.shields.io/twitter/follow/marsigliacr?label=Follow%20on%20Twitter" /></a>
</p>
<br/>

These is a shareable config for ESLint, used on my personal JavaScript/TypeScript/React projects.

## What it does

- Lints JavaScript and TypeScript files
- Uses [eslint-config-xo](https://github.com/xojs/eslint-config-xo) as a base config

## Installing

1. Install the config and dependencies:

   - Using [npm](https://www.npmjs.com)
     ```bash
     npx install-peerdeps eslint-config-marsi --dev
     ```

   - Using [yarn](https://yarnpkg.com)
     ```bash
     npx install-peerdeps eslint-config-marsi --yarn --dev
     ```

   - Using [pnpm](https://pnpm.io)
     ```bash
     npx install-peerdeps eslint-config-marsi --pnpm --dev
     ```

2. Create a `.eslintrc.json` file in the root of your project's directory.

3. Fill your `.eslintrc.json` file:
  
     - Using JavaScript:
       ```json
       {
         "extends": ["marsi"]
       }
       ```

     - Using TypeScript:
       ```json
       {
         "extends": ["marsi/typescript"]
       }
       ```

    If you won't use TypeScript, you can remove TypeScript-related packages from your `package.json`:

    ```diff
    "devDependencies": {
    - "@typescript-eslint/eslint-plugin": "x.x.x",
    - "@typescript-eslint/parser": "X.X.X",
    - "typescript": "X.X.X"
    },
    ```

## Scripts

You can add these two scripts to your package.json to lint and/or fix your code:
```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
},
```

## Settings

If you'd like to overwrite eslint settings, you can add the rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"`.

```json
{
  "extends": ["marsi"],
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
  }
}
```


## Visual Studio Code support

For a better developer experience, you probably want your editor to lint and fix for you.
1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the Open (Open Settings) icon in the top right corner:
  ```js
  "editor.formatOnSave": false,
  "eslint.alwaysShowStatus": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
  ```
  
After attempting to lint your file for the first time, you may need to click on 'ESLint' in the bottom right and select 'Allow Everywhere' in the alert window. 
Finally you'll usually need to restart VS code.
