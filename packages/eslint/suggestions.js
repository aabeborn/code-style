export default {
    rules: {
        // Enforce getter and setter paris in objects and classes
        'accessor-pairs':
        // Require braces around arrow function bodies
        'arrow-body-style':
        // Enforce the use of variables within the scope they are defined
        'block-scoped-var':
        // Enfoce camelcase naming convention
        'camelcase':
        // Enforce or disallow capitalization of the first letter of a comment
        'capitalized-comments':
        // Enforce that class methods utilze `this`
        'class-methods-use-this':
        // Enforce a maximum cuclomatic complexity allowed in a program
        'complexity':
        // Require `return` statements to either always or never specify values
        'consistent-return':
        // Enforce consistent naming when capturing the current execution context
        'consistent-this':
        // Enforce consistent brace style for all control statements
        'curly':
        // Require `default` cases in `switch` statements
        'default-case':
        // Enforce default clauses in switch statements to be last
        'default-case-last':
        // Enforce default parameters to be last
        'default-param-last':
        // Enforce dot notation whenever possible
        'dot-notation':
        // Require the use of `===` and `!==`
        'eqeqeq': 
        // Require funciton names to match the name of the variable or property to which they are assigned
        'func-name-matching':
        // Require or disallow named `function` expressions
        'func-names':
        // Enforce the consistent use of either `function` declarations or expressions
        'func-style':
        // Require grouped accessor pairs in object literals and classes
        'grouped-accessor-pairs':
        // Require `for-in` loops to include an `if` statement
        'guard-for-in':
        // Disallow specified identifiers 
        'id-denylist':
        // Enforce minimum and maximum identifier lengths
        'id-length':
        // Require identifiers to match a specified regular expression
        'id-match':
        // Require or disallow initialization in variable declarations
        'init-declarations':
        // Require or disallow logical assignment logical operator shortand
        'logical-assignment-operators':
        // Enforce a maximum number of classes per file
        'max-classes-per-file':
        // Enforce a maximum depth that blocks can be nested
        'max-depth':
        // Enforce a maximum number of lines per file
        'max-lines':
        // Enforce a maximum number of lines of code in a function
        'max-lines-per-function':
        // Enforce a maximum depth that callbacks can be nested
        'max-nested-callbacks':
        // Enforce a maximum number of parameters in function definitions
        'max-params':
        // Enforce a maximum number of statements allowed in function blocks
        'max-statements':
        // Enforce a particular style for multiline comments
        'multiline-comment-style':
        // Enforce constructor names to begin with a capital letter
        'new-cap':
        // Disallow the use of `alert`, `confirm`, and `prompt`
        'no-alert':
        // Disallow `Array` constructors
        'no-array-constructor':
        // Disallow bitwise operators
        'no-bitwise':
        // Disallow the use of `arguments.caller` or `arguments.callee`
        'no-caller':
        // Disallow lexical declarations in case clauses
        'no-case-declarations': 
        // Disallow arrow functions where they could be confused wit comparisons
        'no-confusing-arrow':
        // Disallow the use of `console`
        'no-console':
        // Disallow `continue` statements
        'no-continue':
        // Disallow deleting variables
        'no-delete-var':
        // Disallow division operators explicity at the beginning of regular expressions
        'no-div-regex':
        // Disallow `else` blocks after `return` statements in `if` statements
        'no-else-return':
        // Disallow empty block statements
        'no-empty':
        // Disallow empty functions
        'no-empty-function':
        // Disallow empty static blocks
        'no-empty-static-block':
        // Disallow `null` comparisons without type-checking operators
        'no-eq-null':
        // Dusallow the use of `eval()`
        'no-eval':
        // Disallow extending native types
        'no-extend-native':
        // Disallow unnecessary calls to `.bind()`
        'no-extra-bind':
        // Disallow unnecessary boolean casts
        'no-extra-boolean-cast':
        // Disallow unnecessary labels
        'no-extra-label':
        // Disallow unnecessary semicolons
        'no-extra-semi': 
        // Disallow leading or trailing decimal points in numeric literals
        'no-floating-decimal':
        // Disallow assignments to native objects or read-only global variables
        'no-global-assign':
        // Disallow shorthand type conversions 
        'no-implicit-coercion':
        // Disallow declarations in the global scope
        'no-implict-globals':
        // Disallow the use of `eval()`-like methods
        'no-implied-eval':
        // Disallow inline comments after code
        'no-inline-comments':
        // Disallow use of `this` in contexts where the value of `this` is `undefined`
        'no-invalid-this':
        // Disallow the use of the `__iterator__` property
        'no-iterator':
        // Disallow labels that share a name with a variable
        'no-label-var':
        // Disallow labeled statements
        'no-labels':
        // Disallow unnecessary nested blocks
        'no-lone-blocks':
        // Disallow `if` statements as the only statement in `else` blocks\
        'no-lonely-if':
        // Disallow function declarations that contain unsafe references inside loop statements
        'no-loop-func':
        // Disallow magic numbers
        'no-magic-numbers':
        // Disallow mixed binary operators
        'no-mixed-operators':
        // Disallow use of chained assignment expressions
        'no-multi-assign':
        // Disallow multiline strings
        'no-multi-str':
        // Disallow negated conditions
        'no-negated-condition':
        // Disallow nested ternary expressions
        'no-nested-ternary':
        // Disallow `new` operators outside of assignments of comparisons
        'no-new':
        // Disallow `new` operators with the `Function` object
        'no-new-func':
        // Disallow `Object` constructors
        'no-new-object':
        // Disallow `new` operators with the `String`, `Number` and `Boolean` objects
        'no-new-wrappers':
        // Disallow `\8` and `\9` escape sequences in string literals
        'no-nonoctal-decimal-escape':
        // Disallow octal literals
        'no-octal':
        // Disallow octal escape sequences in string literals
        'no-octal-escape':
        // Disallow reassinging `function` parameters
        'no-param-reassign': 
        // Disallow the unary operators `++` and `--`
        'no-plusplus':
        // Disallow the use of the `__proto__` property
        'no-proto':
        // Disallow variable redeclaration
        'no-redeclare':
        // Disallow multiple spaces in regular expressions
        'no-regex-spaces':
        // Disallow specified names in exports
        'no-restricted-exports':
        // Disallow specified global variables
        'no-restricted-globals':
        // Disallow specified modules when loaded by `import`
        'no-restricted-properties':
        // Disallow certain properties on certain objects
        'no-restricted-properties':
        // Disallow specfied syntax
        'no-restricted-syntax':
        // Disallow assignment operators in `return` statements
        'no-return-assign':
        // Disallow unnecessary `return await`
        'no-return-await':
        // Disallow `javascript:` urls
        'no-script-url':
        // Disallow comma operators
        'no-sequences':
        // Disallow variable declarations from shadowing variables declared in the outer scope
        'no-shadow':
        // Disallow identifiers from shadowing restricted names
        'no-shadow-restricted-names':
        // Disallow ternary operators
        'no-ternary':
        // Disallow throwing literals as exceptions
        'no-throw-literal':
        // Disallow initializing variables to `undefined`
        'no-undef-init':
        // Disallow the use of `undefined` as an identifier
        'no-undefined':
        // Disallow dangling underscore in  identifiers
        'no-underscore-dangle':
        // Disallow ternary operators when simpler alternatives exist
        'no-unneeded-ternary':
        // Disallow unused expressions
        'no-unused-expressions':
        // Disallow unused labels
        'no-unused-labels':
        // Disallow unnecessary calls to `.call()` and `.apply()`
        'no-useless-call':
        // Disallow unnecessary `catch` clauses
        'no-useless-catch':
        // Disallow unnecessary computed property keys in objects and classes
        'no-useless-computed-key':
        // Disallow unnecessary concatenation of literals or template literals
        'no-useless-concat':
        // Disallow unnecessary constructor
        'no-useless-constructor':
        // Disallow unnecessary escape characters
        'no-useless-escape':
        // Disallow renaming import, export, and destructured assignments to the same name
        'no-useless-rename':
        // Disallow redundant return statements
        'no-useless-return':
        // Require `let` or `const` instead of `var`
        'no-var':
        // Disallow `void` operators
        'no-void':
        // Disallow specified warning terms in comments
        'no-warning-comments':
        // Disallow `with` statements
        'no-with':
        // Require or disallow method and property shortand syntax for object literals
        'object-shorthand':
        // Enforce variables to be declared either together or separately in funcitons]
        'one-var':
        // Require or disallow newlines around variable declarations
        'one-var-declaration-per-line':
        // Require or disallow assignment operator shorthand where possible
        'operator-assignment':
        // Require using arrow funcitons for callbacks
        'prefer-arrow-callback':
        // Require `const` declarations for variables that are never reassigned after declared
        'prefer-const':
        // Require destructuring from arrays and/or objects
        'prefer-destructuring':
        // Disallow the use of `Math.pow` in favor of the `**` operator
        'prefer-exponentiation-operator': 
        // Enforce using named capture group in regular expression
        'prefer-named-capture-group':
        // Disallow `parseInt()` and `Number.parseInt() in favor of binary, octal, adn hexadecimal literals
        'prefer-numeric-literals':
        // Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
        'prefer-object-has-own':
        // Disallow using `Object.assign` with an object literal as the first argument and prefre the use of objects spread instead
        'prefer-object-spread':
        // Require using Error objects as Promise rejection reasons
        'prefer-promise-reject-errors':
        // Disallow use of the `RegExp` constructor in favor of regualr expression literals
        'prefer-regex-literals':
        // Require rest parameters instead of `arguments`
        'prefer-rest-params':
        // Require spread operators instead of `.apply()`
        'prefer-spread':
        // Require template literals instead of string concatenation
        'prefer-template':
        // Require quotes around object literal property names
        'quote-props':
        // Enforce the consistent use of the radix argument when using `parseInt()`
        'radix':
        // Disallow async functions which have no `await` expression
        'require-await':
        // Enforce the use of `u` flag on RegExp
        'require-unicode-regexp':
        // Require generator functions to contain `yield`
        'require-yield':
        // Enforce sorted import declarations within modules
        'sort-imports':
        // Require object keys to be sorted 
        'sort-keys':
        // Require variables within the same declaration block to be sorted
        'sort-vars':
        // Enforce consistent spacing after the `//` or `/*` in a comment
        'spaced-comment':
        // Require or disallow strict mode directives
        'strict':
        // Require symbol descriptions
        'symbol-description':
        // Require `var` declarations be placed at the top of their containing scope
        'vars-on-top':
        // Require or disallow "Yoda" conditions
        'yoda:'  
    }
}