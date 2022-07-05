module.exports = {
	env: {
		es2021: true,
		node: true
	},
	extends: ['eslint:recommended', 'standard'],
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
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['import'],
	rules: {
		'arrow-body-style': 'off',
		'arrow-parens': ['warn', 'as-needed'],
		camelcase: 'off',
		'capitalized-comments': 'off',
		'comma-dangle': ['warn', 'never'],
		curly: ['error', 'multi-line'],
		'guard-for-in': 'off',
		'import/export': 'off',
		'import/no-anonymous-default-export': 'off',
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
				ignoreRestSiblings: false,
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
		quotes: ['warn', 'single'],
		radix: 'off',
		semi: ['warn', 'never'],
		'sort-imports': [
			'warn',
			{
				ignoreDeclarationSort: true
			}
		],
		'space-before-function-paren': 'off',
		'spaced-comment': 'warn'
	}
}
