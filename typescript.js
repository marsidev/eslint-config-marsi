module.exports = {
	extends: [
		'./.eslintrc.js',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		project: './tsconfig.json'
	},
	rules: {
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				assertionStyle: 'as',
				objectLiteralTypeAssertions: 'never'
			}
		],
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				multiline: {
					delimiter: 'none',
					requireLast: true
				},
				multilineDetection: 'brackets',
				singleline: {
					delimiter: 'comma',
					requireLast: false
				}
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
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				args: 'after-used',
				argsIgnorePattern: '^_.*?$',
				ignoreRestSiblings: false
			}
		],
		'@typescript-eslint/semi': ['error', 'never'],
		'@typescript-eslint/type-annotation-spacing': ['error'],
		'import/no-unresolved': 'error'
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx']
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`

				// Choose from one of the "project" configs below or omit to use <root>/tsconfig.json by default

				// // use <root>/path/to/folder/tsconfig.json
				// "project": "path/to/folder",

				// // Multiple tsconfigs (Useful for monorepos)

				// // use a glob pattern
				// "project": "packages/*/tsconfig.json",

				// // use an array
				// "project": [
				//   "packages/module-a/tsconfig.json",
				//   "packages/module-b/tsconfig.json"
				// ],

				// // use an array of glob patterns
				// "project": [
				//   "packages/*/tsconfig.json",
				//   "other-packages/*/tsconfig.json"
				// ]
			}
		}
	}
}
