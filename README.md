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
- Uses [eslint-config-standard](https://github.com/standard/eslint-config-standard) as a base config

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
  
     - For JavaScript projects:
       ```json
       {
         "extends": ["marsi"]
       }
       ```

     - For TypeScript projects:
       ```json
       {
         "extends": ["marsi/ts"]
       }
       ```

     - For JavaScript React (`.jsx`) projects:
       ```json
       {
         "extends": ["marsi/react"]
       }
       ```

     - For TypeScript React (`.tsx`) projects:
       ```json
       {
         "extends": ["marsi/react-ts"]
       }
       ```

       *Note*: If you use TypeScript and your `tsconfig.json` is not in the same directory as `package.json`, you will have to set the path yourself in `parserOptions` and `settings`:

       ```jsonc
       // .eslintrc.json
       {
        "extends": ["marsi/ts"], // or "marsi/react-ts"
        "parserOptions": {
          "project": "path/to/project/tsconfig.json" // <- path including tsconfig.json
        },
        "settings": {
          "import/resolver": {
            "typescript": {
              "project": ["path/to/project"] // <- folder path only
            }
          }
        }
       }
       ```

    If you won't use TypeScript, you can remove TypeScript-related packages from your `package.json`:

    ```diff
    "devDependencies": {
    - "@typescript-eslint/eslint-plugin": "x.x.x",
    - "@typescript-eslint/parser": "x.x.x",
    - "eslint-import-resolver-typescript": "x.x.x",
    - "typescript": "x.x.x"
    },
    ```

    If you won't use React, you can remove React-related packages from your `package.json`:

    ```diff
    "devDependencies": {
    - "eslint-plugin-react": "x.x.x"
    },
    ```

## Scripts

- For JavaScript projects:
  ```json
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
  },
  ```

- For TypeScript projects:
  ```json
  "scripts": {
    "lint": "eslint --ext .ts .",
		"lint:fix": "eslint --ext .ts . --fix",
  },
  ```

- For JavaScript React (`.jsx`) projects:
  ```json
  "scripts": {
    "lint": "eslint --ext .js --ext .jsx .",
		"lint:fix": "eslint --ext .js --ext .jsx . --fix",
  },
  ```

- For TypeScript React (`.tsx`) projects:
  ```json
  "scripts": {
    "lint": "eslint --ext .ts --ext .tsx .",
		"lint:fix": "eslint --ext .ts --ext .tsx . --fix",
  },
  ```

## Settings

If you'd like to overwrite eslint settings, you can add the rules in your `.eslintrc.json` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"`:

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

For a better developer experience, you probably want your editor to lint and fix for you:
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
