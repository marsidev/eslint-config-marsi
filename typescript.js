module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    './.eslintrc.js'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_.*?$'
      }
    ],
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never'
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false
        },
        multilineDetection: 'brackets'
      }
    ],
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-redeclare': [
      'warn',
      {
        ignoreDeclarationMerge: true
      }
    ],
    '@typescript-eslint/type-annotation-spacing': ['error'],
    'no-unused-vars': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }]
  },
  parserOptions: {
    project: './tsconfig.json'
  }
}
