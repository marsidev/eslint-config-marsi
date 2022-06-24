module.exports = {
  extends: [
    'xo',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'unused-imports',
    'react',
    'react-hooks'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
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
    '@typescript-eslint/type-annotation-spacing': ['error'],
    'arrow-body-style': 'off',
    camelcase: 'off',
    'capitalized-comments': 'off',
    'comma-dangle': ['warn', 'never'],
    curly: ['error', 'multi-line'],
    'guard-for-in': 'off',
    indent: ['error', 2],
    'no-mixed-spaces-and-tabs': 'off',
    'no-console': 'off',
    'no-negated-condition': 'off',
    'no-extend-native': 'off',
    'no-return-assign': 'off',
    'no-trailing-spaces': 'warn',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': 'off',
    quotes: ['error', 'single'],
    radix: 'off',
    semi: ['error', 'never'],
    'space-before-function-paren': 'off',
    'spaced-comment': 'warn',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/function-component-definition': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true
      }
    ],
    'react/jsx-tag-spacing': 'off',
    'react/no-children-prop': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/sort-prop-types': [
      'warn',
      {
        callbacksLast: true,
        ignoreCase: true,
        requiredFirst: false,
        sortShapeProp: true,
        noSortAlphabetically: false
      }
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
        ignoreDeclarationSort: false
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}


