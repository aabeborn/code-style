module.export = {
	rules: {
		// Enforce return statements in callbacks of array methods
		'array-callback-return': [2, { allowImplicit: true }],
		// Require `super()` calls in constructor
		'constructor-super': 2,
		// Enforce "for" loop update clause moving the counter in the right direction
		'for-direction': 2,
		// Enforce `return` statements in getters
		'getter-return': [2, { allowImplicit: true }],
		// Disallow using an async function as a Promise executor
		'no-async-promise-executor': 2,
		// Disallow `await` inside of loops
		'no-await-in-loop': 1,
		// Disallow reassinging class members
		'no-class-assign': 2,
		// Disallow comparing against -0
		'no-compare-neg-zero': 2,
		// Disallow assignment operators in conditional expressions
		'no-cond-assign': [2, 'always'],
		// Disallow reassigning `const` variables
		'no-const-assign': 2,
		// Disallow expressions where the operation doesn't affect the value
		'no-constant-binary-expression': 2,
		// Disallow constant expressions in conditions
		'no-constant-condition': 1,
		// Disallow returning value from constructor
		'no-constructor-return': 2,
		// Disallow control characters in regular expressions
		'no-control-regex': 2,
		// Disallow the use of `debugger`
		'no-debugger': 1,
		// Disallow duplicate arguments in `function` definitions
		'no-dupe-args': 2,
		// Disallow duplicate class members
		'no-dupe-class-members': 2,
		// Disallow duplicate conditions in if-else-if chains
		'no-dupe-else-if': 2,
		// Disallow duplicate keys in object literals
		'no-dupe-keys': 2,
		// Disallow duplicate case labels
		'no-duplicate-case': 2,
		// Disallow duplicate module imports
		'no-duplicate-imports': 2,
		// Disallow empty character classes in regular expressions
		'no-empty-character-class': 2,
		// Disallow empty destructuring patterns
		'no-empty-pattern': 2,
		// Disallow reassigning exceptions in `catch` clauses
		'no-ex-assign': 2,
		// Disallow fallthrough of `case` statements
		'no-fallthrough': 2,
		// Disallow reassigning `function` declarations
		'no-func-assign': 2,
		// Disallow assigning imported bindings
		'no-import-assign': 2,
		// Disallow variable or `function` declarations in nested blocks
		'no-inner-declarations': 2,
		// Disallow invalid regular expression strings in `RegExp` constructors
		'no-invalid-regexp': 2,
		// Disallow irregular whitespace
		'no-irregular-whitespace': 2,
		// Disallow literal numbers that lose precision
		'no-loss-of-precision': 1,
		// Disallow characters which are made with multiple code points in character class syntax
		'no-misleading-character-class': 2,
		// Disallow `new` operators with global non-constructor functions
		'no-new-native-nonconstructor': 2,
		// Disallow `new` opertors with the `Symbol` object
		'no-new-symbol': 2,
		// Disallow calling global object properties as functions
		'no-obj-calls': 2,
		// Disallow returing values from Promise executor functions
		'no-promise-executor-return': 1,
		// Disallow calling some `Object.prototype` methods directly on objects
		'no-prototype-builtins': 2,
		// Disallow assignments where both sides are exactly the same
		'no-self-assign': 2,
		// Disallow comparisons where both sides are exactly the same
		'no-self-compare': 1,
		// Disallow returning values from setters
		'no-setter-return': 2,
		// Disallow sparse arrays
		'no-sparse-arrays': 2,
		// Disallow template literal placeholder syntax in regular strings
		'no-template-curly-in-string': 1,
		// Disallow `this` / `super` before calling `super()` in constructors
		'no-this-before-super': 2,
		// Disallow the use of undeclared variables mentioned in `/*global */` comments
		'no-undef': 2,
		// Disallow confusing multiline expressions
		'no-unexpected-multiline': 2,
		// Disallow unmodified loop conditions
		'no-unmodified-loop-condition': 2,
		// Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
		'no-unreachable': 2,
		// Disallow loops with a body that allows only one iteration
		'no-unreachable-loop': 1,
		// Disallow control flow statements in `finally` blocks
		'no-unsafe-finally': 2,
		// Disallow negating the left operand of relational operators
		'no-unsafe-negation': 2,
		// Disallow use of optional in contexts where the `undefined` value is not allowed
		'no-unsafe-optional-chaining': 2,
		// Disallow unused private class members
		'no-unused-private-class-members': 2,
		// Disallow unused variables
		'no-unused-vars': 2,
		// Disallow the use of variables before they are defined
		'no-use-before-define': 1,
		// Disallow useless backreferences in regular expressions
		'no-useless-backreference': 2,
		// Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
		'require-atomic-updates': 1,
		// Require calls to `isNan()` when checking for `NaN`
		'use-isnan': 2,
		// Enforce comparing `typeof` expressions against valid strings
		'valid-typeof': 2,
	},
}
