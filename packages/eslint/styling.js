// AKA LAYOUT & FORMATTING
module.export = {
	rules: {
		// Enforce linebreaks after opening and before closing array brackets
		'array-bracket-newline': [1, 'consistent'],
		// Enforce consistent spacing inside array brackets
		'array-bracket-spacing': [1, 'never', { singleValue: true }],
		// Enforce line breaks after each array element
		'array-element-newline': 0,
		// Require parenthesis around arrow function arguments
		'arrow-parens': [1, 'as-needed'],
		// Enforce consistent spacing before and after the arrow in arrow functions
		'arrow-spacing': 1,
		// Disallow or enforce spaces inside of blocks after opening block and before closing
		'block-spacing': 1,
		// Enforce consistent brace style for blocks
		'brace-style': [1, '1tbs'],
		// Require or disallow trailing commas
		'comma-dangle': [1, 'never'],
		// Enforce consistent spacing before and after commas
		'comma-spacing': 1,
		// ENforce consistent comma style
		'comma-style': 1,
		// Enforce consistent spacing inside computed property brackets
		'computed-property-spacing': 1,
		// Enforce consistent newlines before and after dots
		'dot-location': [1, 'property'],
		// Require or disallow newline at the end of files
		'eol-last': [1, 'always'],
		// Require or disallow spacing between function identifiers and their invocations
		'func-call-spacing': [2, 'never'],
		// Enforce line breaks between arguments of a function call
		'function-call-argument-newline': [1, 'consistent'],
		// Enforce consistent line breaks inside function parenthesis
		'function-paren-newline': [1, 'consistent'],
		// Enforce consistent spacing around '*' operators in generator functions
		'generator-star-spacing': [2, { before: false, after: true }],
		// Enforce the location of arrow function bodies
		'implicit-arrow-linebreak': [1, 'beside'],
		// Enforce consistent identation
		indent: [
			1,
			'tab',
			{
				FunctionDeclaration: {
					parameters: 'first',
				},
				SwitchCase: 1,
			},
		],
		// Enforce the consistent use of either double or single quotes in JSX attributes
		'jsx-quotes': [1, 'prefer-double'],
		// Enforce consistent spacing between keys and values in object literal properties
		'key-spacing': 1,
		// Enforce consistent spacing before and after keywords
		'keyword-spacing': 1,
		// Enforce position of line comments
		'line-comment-position': 0,
		// Enforce consistent linebreak style
		'linebreak-style': [1, 'unix'],
		// Require empty lines around comments
		'lines-around-comment': 0,
		// Require or disallow an empty line between class members
		'lines-between-class-members': 1,
		// Enforce a maximum line length
		'max-len': [
			'warn',
			120,
			2,
			{
				ignoreUrls: true,
				ignoreComments: true,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
			},
		],
		// Enforce a maximum number of statements allowed per line
		'max-statements-per-line': 0,
		// Enforce newlines between operands of ternary experssions
		'multiline-ternary': [0, 'always-multiline'],
		// Enforce or disallow parenthesis when invoking a constructor with no arguments
		'new-parens': 1,
		// Require a newline after each call in a method chain
		'newline-per-chained-call': [1, { ignoreChainWithDepth: 4 }],
		// Disallow unnecessary parenthesis
		'no-extra-parens': 1,
		// Disallow mixed spaces and tas for identation
		'no-mixed-spaces-and-tabs': 1,
		// Disallow multiple spaces
		'no-multi-spaces': [
			2,
			{
				ignoreEOLComments: false,
			},
		],
		// Disallow multiple empty lines
		'no-multiple-empty-lines': 1,
		// Disallow all tabs
		'no-tabs': [1, { allowIndentationTabs: true }],
		// Disallow trailing whitespace at the end of lines
		'no-trailing-spaces': [
			1,
			{
				skipBlankLines: false,
				ignoreComments: false,
			},
		],
		// Disallow whitespace before properties
		'no-whitespace-before-property': 2,
		// Enforce the location of single-line statements
		'nonblock-statement-body-position': [1, 'beside', { overrides: {} }],
		// Enforce consistent line breaks after opepning and before closing breaces
		'object-curly-newline': [
			1,
			{
				ObjectExpression: {
					minProperties: 4,
					multiline: true,
					consistent: true,
				},
				ObjectPattern: {
					minProperties: 4,
					multiline: true,
					consistent: true,
				},
				ImportDeclaration: {
					minProperties: 4,
					multiline: true,
					consistent: true,
				},
				ExportDeclaration: {
					minProperties: 4,
					multiline: true,
					consistent: true,
				},
			},
		],
		// Enforce consistent spacing inside braces
		'object-curly-spacing': [1, 'always'],
		// Enforce placing object properties on separate lines
		'object-property-newline': [
			2,
			{
				allowAllPropertiesOnSameLine: true,
			},
		],
		// Enforce consistent linebreak style for operators
		'operator-linebreak': [1, 'before', { overrides: { '=': 'none' } }],
		// Require or disallow padding within blocks
		'padded-blocks': [
			1,
			{
				blocks: 'never',
				classes: 'always',
				switches: 'never',
			},
			{
				allowSingleLineBlocks: true,
			},
		],
		// Require or disallow padding lines between statements
		'padding-line-between-statements': 1,
		// Enforce the consistent use of either backticks, double, or single quotes
		quotes: [2, 'single', { avoidEscape: true }],
		// Enforce spacing between rest and spread operators and their expressions
		'rest-spread-spacing': [1, 'never'],
		// Require or disallow semicolons instead of ASI
		semi: [2, 'never'],
		// Enforce consistent spacing before and after semicolons
		'semi-spacing': 1,
		// Enforce location of semicolons
		'semi-style': [1, 'last'],
		// Enforce consistent spacing before blocks
		'space-before-blocks': 1,
		// Enforce consistent spacing before `function` definition opening parenthesis
		'space-before-function-paren': [
			1,
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		// Enforce consistent spacing inside parenthesis
		'space-in-parens': [1, 'always'],
		// Require spacing around infix operators
		'space-infix-ops': 1,
		// Enforce  consistent spacing before or after unary operators
		'space-unary-ops': [
			2,
			{
				words: true,
				nonwords: false,
				overrides: {},
			},
		],
		// Enforce spacing arounf colons of swithc statements
		'switch-colon-spacing': [2, { after: true, before: false }],
		// Require or disallow spacing around embedded expressions of template strings
		'template-curly-spacing': 2,
		// Require or disallow spacing between template tags and their literals
		'template-tag-spacing': [2, 'never'],
		// Require or disallow Unicode byte order mark (BOM)
		'unicode-bom': [1, 'never'],
		// Require parenthesis around immediate `function` invocations
		'wrap-iife': 0,
		// Require parenthesis around regex literals
		'wrap-regex': 0,
		// Require or disallow spacing around the `*` in `yield*` expressions
		'yield-star-spacing': [2, 'after'],
	},
}
