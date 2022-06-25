module.exports = {
  extends: [
    'xo',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/recommended'
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ['import', 'unused-imports', 'react', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'arrow-body-style': 'off',
    camelcase: 'off',
    'capitalized-comments': 'off',
    'comma-dangle': ['warn', 'never'],
    curly: ['error', 'multi-line'],
    'guard-for-in': 'off',
    indent: ['error', 2],
    'no-mixed-spaces-and-tabs': 'off',
    'no-console': 'off',
    'no-debugger': 'warn',
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
    'react/jsx-filename-extension': [1, { extensions: ['.jsx'] }],
    'react/jsx-indent': [2, 2],
    'react/jsx-sort-props': ['warn', {
      callbacksLast: true,
      shorthandFirst: true,
      noSortAlphabetically: false,
      reservedFirst: true
    }],
    'react/jsx-tag-spacing': 'off',
    'react/no-children-prop': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/sort-prop-types': ['warn', {
      callbacksLast: true,
      ignoreCase: true,
      requiredFirst: false,
      sortShapeProp: true,
      noSortAlphabetically: false
    }],
    'sort-imports': ['error', {
      ignoreCase: true,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      allowSeparatedGroups: false
    }],
    'import/order': ['warn', {
      groups: [
        'type',
        'builtin',
        'object',
        'external',
        'internal',
        'parent',
        'sibling',
        'index'
      ],
      pathGroups: [{
        pattern: '~/**',
        group: 'external',
        position: 'after'
      }],
      'newlines-between': 'never'
    }],
    'react/self-closing-comp': 'warn',
    'padding-line-between-statements': ['warn', {
      blankLine: 'always', prev: '*', next: ['return', 'export']
    }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
