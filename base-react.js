module.exports = {
	env: {
		browser: true
	},
	extends: ['plugin:react/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['react'],
	rules: {
		'jsx-quotes': ['warn', 'prefer-single'],
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
		]
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
}
