module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'standard'],
	ignorePatterns: [
		'node_modules',
		'dist',
		'build',
		'public',
		'.next',
		'.vercel',
		'.cache',
		'.eslintrc*',
		'*.config.js'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', 'import'],
	rules: {
		'arrow-body-style': 'off',
		'arrow-parens': ['warn', 'as-needed'],
		camelcase: 'off',
		'capitalized-comments': 'off',
		'comma-dangle': ['warn', 'never'],
		curly: ['error', 'multi-line'],
		'guard-for-in': 'off',
		'import/order': [
			'warn',
			{
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
				'newlines-between': 'never',
				pathGroups: [
					{
						group: 'external',
						pattern: '~/**',
						position: 'after'
					}
				]
			}
		],
		indent: ['warn', 'tab'],
		'jsx-quotes': ['error', 'prefer-single'],
		'no-console': 'off',
		'no-constant-binary-expression': 'warn',
		'no-debugger': 'warn',
		'no-extend-native': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'no-negated-condition': 'off',
		'no-return-assign': 'off',
		'no-tabs': 'off',
		'no-trailing-spaces': 'warn',
		'no-unused-vars': [
			'warn',
			{
				args: 'all',
				argsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
				ignoreRestSiblings: true,
				varsIgnorePattern: '^_'
			}
		],
		'no-use-before-define': 'off',
		'object-curly-newline': [
			'error',
			{
				consistent: true,
				multiline: true
			}
		],
		'object-curly-spacing': ['error', 'always'],
		'operator-linebreak': 'off',
		'padding-line-between-statements': 'off',
		'prefer-destructuring': [
			'warn',
			{
				AssignmentExpression: {
					array: false,
					object: false
				},
				VariableDeclarator: {
					array: false,
					object: true
				}
			}
		],
		quotes: ['error', 'single'],
		radix: 'off',
		'react/function-component-definition': 0,
		'react/jsx-indent': ['warn', 'tab'],
		'react/jsx-sort-props': [
			'warn',
			{
				callbacksLast: true,
				noSortAlphabetically: false,
				reservedFirst: true,
				shorthandFirst: true
			}
		],
		'react/jsx-tag-spacing': 'off',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/no-children-prop': 'off',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/self-closing-comp': 'warn',
		'react/sort-prop-types': [
			'warn',
			{
				callbacksLast: true,
				ignoreCase: true,
				noSortAlphabetically: false,
				requiredFirst: false,
				sortShapeProp: true
			}
		],
		semi: ['error', 'never'],
		'sort-imports': [
			'warn',
			{
				ignoreDeclarationSort: true
			}
		],
		'space-before-function-paren': 'off',
		'spaced-comment': 'warn'
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
}