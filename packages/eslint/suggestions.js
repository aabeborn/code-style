const confusingBrowserGlobals = require('confusing-browser-globals')

module.export = {
	rules: {
		// Enforce getter and setter pairs in objects and classes
		'accessor-pairs': 1,
		// Require braces around arrow function bodies
		'arrow-body-style': ['warn', 'as-needed'],
		// Enforce the use of variables within the scope they are defined
		'block-scoped-var': 2,
		// Enfoce camelcase naming convention
		camelcase: [2, { properties: 'never', ignoreDestructuring: false }],
		// Enforce or disallow capitalization of the first letter of a comment
		'capitalized-comments': 1,
		// Enforce that class methods utilze `this`
		'class-methods-use-this': 1,
		// Enforce a maximum cuclomatic complexity allowed in a program
		complexity: 0,
		// Require `return` statements to either always or never specify values
		'consistent-return': 0,
		// Enforce consistent naming when capturing the current execution context
		'consistent-this': 0,
		// Enforce consistent brace style for all control statements
		curly: [1, 'all'],
		// Require `default` cases in `switch` statements
		'default-case': 2,
		// Enforce default clauses in switch statements to be last
		'default-case-last': 2,
		// Enforce default parameters to be last
		'default-param-last': 0,
		// Enforce dot notation whenever possible
		'dot-notation': 1,
		// Require the use of `===` and `!==`
		eqeqeq: 2,
		// Require function names to match the name of the variable or property to which they are assigned
		'func-name-matching': 0,
		// Require or disallow named `function` expressions
		'func-names': 1,
		// Enforce the consistent use of either `function` declarations or expressions
		'func-style': 1,
		// Require grouped accessor pairs in object literals and classes
		'grouped-accessor-pairs': 1,
		// Require `for-in` loops to include an `if` statement
		'guard-for-in': 2,
		// Disallow specified identifiers
		'id-denylist': 0,
		// Enforce minimum and maximum identifier lengths
		'id-length': 0,
		// Require identifiers to match a specified regular expression
		'id-match': 0,
		// Require or disallow initialization in variable declarations
		'init-declarations': 0,
		// Require or disallow logical assignment logical operator shortand
		'logical-assignment-operators': 0,
		// Enforce a maximum number of classes per file
		'max-classes-per-file': 2,
		// Enforce a maximum depth that blocks can be nested
		'max-depth': 0,
		// Enforce a maximum number of lines per file
		'max-lines': 0,
		// Enforce a maximum number of lines of code in a function
		'max-lines-per-function': 0,
		// Enforce a maximum depth that callbacks can be nested
		'max-nested-callbacks': 0,
		// Enforce a maximum number of parameters in function definitions
		'max-params': 0,
		// Enforce a maximum number of statements allowed in function blocks
		'max-statements': 0,
		// Enforce a particular style for multiline comments
		'multiline-comment-style': 0,
		// Enforce constructor names to begin with a capital letter
		'new-cap': 1,
		// Disallow the use of `alert`, `confirm`, and `prompt`
		'no-alert': 1,
		// Disallow `Array` constructors
		'no-array-constructor': 2,
		// Disallow bitwise operators
		'no-bitwise': 2,
		// Disallow the use of `arguments.caller` or `arguments.callee`
		'no-caller': 2,
		// Disallow lexical declarations in case clauses
		'no-case-declarations': 2,
		// Disallow arrow functions where they could be confused wit comparisons
		'no-confusing-arrow': ['error', { allowParens: true }],
		// Disallow the use of `console`
		'no-console': 1,
		// Disallow `continue` statements
		'no-continue': 0,
		// Disallow deleting variables
		'no-delete-var': 1,
		// Disallow division operators explicity at the beginning of regular expressions
		'no-div-regex': 0,
		// Disallow `else` blocks after `return` statements in `if` statements
		'no-else-return': 2,
		// Disallow empty block statements
		'no-empty': 2,
		// Disallow empty functions
		'no-empty-function': 1,
		// Disallow empty static blocks
		'no-empty-static-block': 2,
		// Disallow `null` comparisons without type-checking operators
		'no-eq-null': 0,
		// Dusallow the use of `eval()`
		'no-eval': 2,
		// Disallow extending native types
		'no-extend-native': 2,
		// Disallow unnecessary calls to `.bind()`
		'no-extra-bind': 2,
		// Disallow unnecessary boolean casts
		'no-extra-boolean-cast': 2,
		// Disallow unnecessary labels
		'no-extra-label': 2,
		// Disallow unnecessary semicolons
		'no-extra-semi': 2,
		// Disallow leading or trailing decimal points in numeric literals
		'no-floating-decimal': 2,
		// Disallow assignments to native objects or read-only global variables
		'no-global-assign': [2, { exceptions: [] }],
		// Disallow shorthand type conversions
		'no-implicit-coercion': 0,
		// Disallow declarations in the global scope
		'no-implict-globals': 0,
		// Disallow the use of `eval()`-like methods
		'no-implied-eval': 2,
		// Disallow inline comments after code
		'no-inline-comments': 0,
		// Disallow use of `this` in contexts where the value of `this` is `undefined`
		'no-invalid-this': 0,
		// Disallow the use of the `__iterator__` property
		'no-iterator': 2,
		// Disallow labels that share a name with a variable
		'no-label-var': 2,
		// Disallow labeled statements
		'no-labels': 0,
		// Disallow unnecessary nested blocks
		'no-lone-blocks': 2,
		// Disallow `if` statements as the only statement in `else` blocks
		'no-lonely-if': 2,
		// Disallow function declarations that contain unsafe references inside loop statements
		'no-loop-func': 2,
		// Disallow magic numbers
		'no-magic-numbers': 0,
		// Disallow mixed binary operators
		'no-mixed-operators': 2,
		// Disallow use of chained assignment expressions
		'no-multi-assign': 2,
		// Disallow multiline strings
		'no-multi-str': 2,
		// Disallow negated conditions
		'no-negated-condition': 0,
		// Disallow nested ternary expressions
		'no-nested-ternary': 1,
		// Disallow `new` operators outside of assignments of comparisons
		'no-new': 2,
		// Disallow `new` operators with the `Function` object
		'no-new-func': 2,
		// Disallow `Object` constructors
		'no-new-object': 2,
		// Disallow `new` operators with the `String`, `Number` and `Boolean` objects
		'no-new-wrappers': 2,
		// Disallow `\8` and `\9` escape sequences in string literals
		'no-nonoctal-decimal-escape': 2,
		// Disallow octal literals
		'no-octal': 2,
		// Disallow octal escape sequences in string literals
		'no-octal-escape': 2,
		// Disallow reassinging `function` parameters
		'no-param-reassign': 1,
		// Disallow the unary operators `++` and `--`
		'no-plusplus': 0,
		// Disallow the use of the `__proto__` property
		'no-proto': 2,
		// Disallow variable redeclaration
		'no-redeclare': 2,
		// Disallow multiple spaces in regular expressions
		'no-regex-spaces': 2,
		// Disallow specified names in exports
		'no-restricted-exports': 0,
		// Disallow specified global variables
		'no-restricted-globals': ['warn', 'isFinite', 'isNaN'].concat(
			confusingBrowserGlobals
		),
		// Disallow specified modules when loaded by `import`
		'no-restricted-imports': 0,
		// Disallow certain properties on certain objects
		'no-restricted-properties': [
			'error',
			{
				object: 'arguments',
				property: 'callee',
				message: 'arguments.callee is deprecated',
			},
			{
				object: 'global',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'self',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'window',
				property: 'isFinite',
				message: 'Please use Number.isFinite instead',
			},
			{
				object: 'global',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				object: 'self',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				object: 'window',
				property: 'isNaN',
				message: 'Please use Number.isNaN instead',
			},
			{
				property: '__defineGetter__',
				message: 'Please use Object.defineProperty instead.',
			},
			{
				property: '__defineSetter__',
				message: 'Please use Object.defineProperty instead.',
			},
			{
				object: 'Math',
				property: 'pow',
				message: 'Use the exponentiation operator (**) instead.',
			},
		],
		// Disallow specfied syntax
		'no-restricted-syntax': 0,
		// Disallow assignment operators in `return` statements
		'no-return-assign': 1,
		// Disallow unnecessary `return await`
		'no-return-await': 2,
		// Disallow `javascript:` urls
		'no-script-url': 2,
		// Disallow comma operators
		'no-sequences': 2,
		// Disallow variable declarations from shadowing variables declared in the outer scope
		'no-shadow': 2,
		// Disallow identifiers from shadowing restricted names
		'no-shadow-restricted-names': 2,
		// Disallow ternary operators
		'no-ternary': 0,
		// Disallow throwing literals as exceptions
		'no-throw-literal': 2,
		// Disallow initializing variables to `undefined`
		'no-undef-init': 2,
		// Disallow the use of `undefined` as an identifier
		'no-undefined': 0,
		// Disallow dangling underscore in  identifiers
		'no-underscore-dangle': 0,
		// Disallow ternary operators when simpler alternatives exist
		'no-unneeded-ternary': 2,
		// Disallow unused expressions
		'no-unused-expressions': 2,
		// Disallow unused labels
		'no-unused-labels': 2,
		// Disallow unnecessary calls to `.call()` and `.apply()`
		'no-useless-call': 1,
		// Disallow unnecessary `catch` clauses
		'no-useless-catch': 1,
		// Disallow unnecessary computed property keys in objects and classes
		'no-useless-computed-key': 2,
		// Disallow unnecessary concatenation of literals or template literals
		'no-useless-concat': 2,
		// Disallow unnecessary constructor
		'no-useless-constructor': 2,
		// Disallow unnecessary escape characters
		'no-useless-escape': 1,
		// Disallow renaming import, export, and destructured assignments to the same name
		'no-useless-rename': [
			1,
			{
				ignoreDestructuring: false,
				ignoreImport: false,
				ignoreExport: false,
			},
		],
		// Disallow redundant return statements
		'no-useless-return': 1,
		// Require `let` or `const` instead of `var`
		'no-var': 1,
		// Disallow `void` operators
		'no-void': 2,
		// Disallow specified warning terms in comments
		'no-warning-comments': 1,
		// Disallow `with` statements
		'no-with': 2,
		// Require or disallow method and property shortand syntax for object literals
		'object-shorthand': 0,
		// Enforce variables to be declared either together or separately in functions
		'one-var': 0,
		// Require or disallow newlines around variable declarations
		'one-var-declaration-per-line': [1, 'always'],
		// Require or disallow assignment operator shorthand where possible
		'operator-assignment': [1, 'always'],
		// Require using arrow funcitons for callbacks
		'prefer-arrow-callback': [
			1,
			{
				allowNamedFunctions: false,
				allowUnboundThis: true,
			},
		],
		// Require `const` declarations for variables that are never reassigned after declared
		'prefer-const': 2,
		// Require destructuring from arrays and/or objects
		'prefer-destructuring': 1,
		// Disallow the use of `Math.pow` in favor of the `**` operator
		'prefer-exponentiation-operator': 1,
		// Enforce using named capture group in regular expression
		'prefer-named-capture-group': 0,
		// Disallow `parseInt()` and `Number.parseInt() in favor of binary, octal, adn hexadecimal literals
		'prefer-numeric-literals': 2,
		// Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
		'prefer-object-has-own': 2,
		// Disallow using `Object.assign` with an object literal as the first argument and prefre the use of objects spread instead
		'prefer-object-spread': 1,
		// Require using Error objects as Promise rejection reasons
		'prefer-promise-reject-errors': [1, { allowEmptyReject: true }],
		// Disallow use of the `RegExp` constructor in favor of regualr expression literals
		'prefer-regex-literals': 0,
		// Require rest parameters instead of `arguments`
		'prefer-rest-params': 1,
		// Require spread operators instead of `.apply()`
		'prefer-spread': 1,
		// Require template literals instead of string concatenation
		'prefer-template': 2,
		// Require quotes around object literal property names
		'quote-props': [
			'warn',
			'as-needed',
			{ keywords: false, unnecessary: true, numbers: false },
		],
		// Enforce the consistent use of the radix argument when using `parseInt()`
		radix: 2,
		// Disallow async functions which have no `await` expression
		'require-await': 2,
		// Enforce the use of `u` flag on RegExp
		'require-unicode-regexp': 0,
		// Require generator functions to contain `yield`
		'require-yield': 2,
		// Enforce sorted import declarations within modules
		'sort-imports': 0,
		// Require object keys to be sorted
		'sort-keys': 1,
		// Require variables within the same declaration block to be sorted
		'sort-vars': 1,
		// Enforce consistent spacing after the `//` or `/*` in a comment
		'spaced-comment': [1, 'always'],
		// Require or disallow strict mode directives
		strict: [1, 'never'],
		// Require symbol descriptions
		'symbol-description': 0,
		// Require `var` declarations be placed at the top of their containing scope
		'vars-on-top': 1,
		// Require or disallow "Yoda" conditions
		yoda: 0,
	},
}
