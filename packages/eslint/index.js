module.export = {
	extends: [
		'./problems',
		'./suggestions',
		'./styling',
		'./import.js',
		'prettier',
	],
	plugins: ['prettier', 'imports'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': 'error',
		'arrow-body-style': 'off',
		'prefer-arrow-callback': 'off',
	},
}
