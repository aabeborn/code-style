export default {
    rules: {
        // Enforce return statements in callbacks of array methods
        'array-callback-return':['error', {allowImplicit: true}],
        // Require `super()` calls in constructor
        'constructor-super': 
        // Enforce "for" loop update clause moving the counter in the right direction
        'for-direction': 
        // Enforce `return` statements in getters
        'getter-return':
        // Disallow using an async function as a Promise executor
        'no-async-promise-executor':
        // Disallow `await` inside of loops
        'no-await-in-loop': 
        // Disallow reassinging class members
        'no-class-assign':
        // Disallow comparing against -0
        'no-compare-neg-zero': 
        // Disallow assignment operators in conditional expressions
        'no-cond-assign':
        // Disallow reassigning `cosnt` variables
        'no-const-assign': 
        // Disallow expressions where the operation doesn't affect the value
        'no-constant-binary-expression':
        // Disallow constant expressions in conditions
        'no-constant-condition': 
        // Disallow returning value from constructor
        'no-constructor-return': 
        // Disallow control characters in regular expressions
        'no-control-regex':
        // Disallow the use of `debugger`
        'no-debugger':
        // Disallow duplicate arguments in `fucntion` definitions
        'no-dupe-args':
        // Disallow duplicate class members
        'no-dupe-class-members':
        // Disallow duplicate conditions in if-else-if chains
        'no-dupe-else-if':
        // Disallow duplicate keys in object literals
        'no-dupe-keys':
        // Disallow duplicate case labels
        'no-dupe-case-labels':
        // Disallow duplicate module imports
        'no-dupe-imports': 
        // Disallow empty character classes in regular expressions
        'no-empty-character-class':
        // Disallow empty destructuring patterns
        'no-empty-pattern':
        // Disallow reassigning exceptions in `catch` clauses
        'no-ex-assign':
        // Disallow fallthrough of `case` statements
        'no-fallthrough':
        // Disallow reassigning `function` declarations
        'no-func-assign':
        // Disallow assigning imported bindings
        'no-import-assign':
        // Disallow variable or `function` declarations in nested blocks
        'no-inner-declarations':
        // Disallow invalid regular expression strings in `RegExp` constructors
        'no-invalid-regexp':
        // Disallow irregular whitespace
        'no-irregular-whitespace':
        // Disallow literal numbers that lose precision
        'no-loss-of-precision':
        // Disallow characters which are made with multiple code points in character class syntax
        'no-misleading-character-class':
        // Disallow `new` operators with global non-constructor functions
        'no=new-native-nonconstructor':
        // Disallow `new` opertors with the `Symbol` object
        'no-new-symbol': 
        // Disallow calling global object properties as functions
        'no-obj-calls':
        // Disallow returing values from Promise executor functions
        'no-promise-executor-return':
        // Disallow calling some `Object.prototype` mehtods directly on objects
        'no-prototype-builtins':
        // Disallow comparisons where both sides are exactly the same
        'no-self-compare':
        // Disallow returning values from setters
        'no-setter-return':
        // Disallow sparse arrays
        'no-sparse-arrays': 
        // Disallow template literal placeholder syntax in regular strings
        'no-template-curly-in-string':
        // Disallow `this` / `super` before calling `super()` in constructors
        'no-this-before-super':
        // Disallow the use of undeclared variables mentioned in `/*global */` comments
        'no-undef': 
        // Disallow confusing multiline expressions
        'no-unexpected-multiline':
        // Disallow unmodified loop conditions
        'no-unmodified-loop-condition':
        // Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
        'no-unreachable':
        // Disallow loops with a body that allows only one iteration
        'no-unreachable-loop':
        // Disallow control flow statements in `finally` blocks
        'no-unsafe-finally':
        // Disallow negating the left operand of relational operators
        'no-unsafe-negation':
        // Disallow use of optional in contexts where the `undefined` value is not allowed
        'no-unsafe-optional-chaining':
        // Disallow unused private class members
        'no-unused-private-class-memebers':
        // Disallow unused variables
        'no-unused-vars':
        // Disallow the use of variables before they are defined
        'no-use-before-define':
        // Disallow useless backreferences in regular expressions
        'no-useless-backreference':
        // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
        'require-atomic-updates':
        // Require calls to `isNan()` when checking for `NaN`
        'use-isnan':
        // Enforce comparing `typeof` expressions against valid strings
        'valid-typeof': 
    }
}