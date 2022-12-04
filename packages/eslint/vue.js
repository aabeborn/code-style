module.export = {
	env: {
		browser: true,
	},
	rules: {
		// ESLINT PARSING FIXES
		// Support comment-directives in `<template>`
		'vue/comment-directive': 2,
		// Prevent variables used in JSX to be marked as unused
		'vue/jsx-uses-vars': 2,
		// ESSENTIAL RULES (ERROR PREVENTION)
		// Require component names to be always multi-word
		'vue/multi-word-component-names': 1,
		// Disallow using arrow functions to define watcher
		'vue/no-arrow-functions-in-watch': 2,
		// Disallow asynchronous actions in computed properties
		'vue/no-async-in-computed-properties': 2,
		// Disallow element's child contents which would be overwritten by a directive like `v-ntml` or `v-text`
		'vue/no-child-content': 2,
		// Disallow accessing computed properties in data
		'vue/no-computed-properties-in-data': 2,
		// Disallow using deprecated object declaration on data
		'vue/no-deprecated-data-object-declaration': 2,
		// Disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks
		'vue/no-deprecated-destroyed-lifecyle': 2,
		// Disallow using deprecated `$listeners`
		'vue/no-deprecated-dollar-listeners-api': 2,
		// Disallow using deprecated `$scopedSlots`
		'vue/no-deprecated-dollar-scopedslots-api': 2,
		// Disallow using deprecated events api
		'vue/no-deprecated-events-api': 2,
		// Disallow using deprecated filters syntax
		'vue/no-deprecated-filter': 2,
		// Disallow using deprecated `functional` template
		'vue/no-deprecated-functional-template': 2,
		// Disallw using deprecated `is` attribute on HTML elements
		'vue/no-deprecated-html-element-is': 2,
		// Disallow using deprecated `inline-template` attribute
		'vue/no-deprecated-inline-template': 2,
		// Disallow deprecated `this` access in props default function
		'vue/no-deprecated-props-default-this': 2,
		// Disallow using deprecated `tag` property on `RouterLink`
		'vue/no-deprecated-router-link-tag-prop': 2,
		// Disallow deprecated `scope` attribute
		'vue/no-deprecated-scope-attribute': 2,
		// Disallow deprecated `slot` attribute
		'vue/no-deprecated-slot-attribute': 2,
		// Disallow deprecated `slot-scope` attribute
		'vue/no-deprecated-slot-scope-attribute': 2,
		// Disallow use of deprecated `.sync` modifier on `v-bind` directive
		'vue/no-deprecated-v-bind-sync': 2,
		// Disallow deprecated `v-is` directive
		'vue/no-deprecated-v-is': 2,
		// Disallow using deprecated `.native` modifier
		'vue/no-deprecated-v-on-number-modifiers': 2,
		// Disallow using deprecated number (keycode) modifiers
		'vue/no-deprecated-v-on-number-modifiers': 2,
		// Disallow using deprecated `Vue.config.keyCodes`
		'vue/no-deprecated-vue-config-keycodes': 2,
		// Disallow duplication of field names
		'vue/no-dupe-keys': 2,
		// Disallow duplicate conditions in `v-if` / `v-else-if` chains
		'vue/no-dupe-v-else-if': 2,
		// Disallow duplication of attributes
		'vue/no-duplicate-attributes': 2,
		// Disallow `export` in `<script setup>`
		'vue/no-export-in-script-setup': 2,
		// Disallow asynchronously registered `expose`
		'vue/no-expose-after-await': 2,
		// Disallow asynchrounously registered lifecycle hooks
		'vue/no-lifecycle-after-await': 2,
		// Disallow mutation of component props
		'vue/no-mutating-props': 2,
		// Disallow parsing errors in `<template>`
		'vue/no-parsing-error': 2,
		// Disallow use of value wrapped by `ref()` as an operand
		'vue/no-ref-as-operand': 2,
		// Disallow the use of reserved names in component definitions
		'vue/no-reserved-component-names': 2,
		// Disallow overwriting reserved keys
		'vue/no-reserved-keys': 2,
		// Disallow reserved names in props
		'vue/no-reserved-props': 2,
		// Disallow destructuring of `props` passed to `setup`
		'vue/no-setup-props-destructure': 2,
		// Enforce component's data property to be a function
		'vue/no-shared-component-data': 2,
		// Disallow side effects in computed properties
		'vue/no-side-effects-in-computed-properties': 2,
		// Disallow `key` attribute on `<template>`
		'vue/no-template-key': 2,
		// Disallow mustaches in `<textarea>`
		'vue/no-textarea-mustache': 2,
		// Disallow registering components that are not used inside templates
		'vue/no-unused-components': 2,
		// Disallow unused variable definitions v-for directives or scope attributes
		'vue/no-unused-vars': 2,
		// Disallow computed property like method
		'vue/no-use-computed-property-like-method': 2,
		// Disallow use v-if on the same element as v-for
		'vue/no-use-v-if-with-v-for': 2,
		// Disallow useless attrivute on `<template>`
		'vue/no-useless-template-attribute': 2,
		// Disallow key of `<template v-for>` placed on child elements
		'vue/no-v-for-template-key-on-child': 2,
		// Disallow v-text / v-html on component
		'vue/no-v-text-v-html-on-component': 0,
		// Disallow asynchronously registered `watch`
		'vue/no-watch-after-await': 2,
		// Enforce import from 'vue' instead of import '@vue/*'
		'vue/prefer-import-from-vue': 2,
		// Require `v-bind:is` of `<component>` elements
		'vue/require-component-is': 2,
		// Require prop type to be a constructor
		'vue/require-prop-type-constructor': 2,
		// Enforce render function to always return value
		'vue/require-render-return': 2,
		// Enforce properties of `$slots`to be used as a function
		'vue/require-slots-as-functions': 2,
		// Require control the displat of the cntent inside `<transition>`
		'vue/require-toggle-inside-transition': 2,
		// Require `v-bind:key` with `v-for` directives
		'vue/require-v-for-key': 2,
		// Enforce props default values to be valid
		'vue/require-valid-default-prop': 2,
		// Enforce that a return statement is present in computed property
		'vue/return-computed-property': 2,
		// Enforce that a return statement is present in emits validator
		'vue/return-in-emits-validator': 2,
		// Enforce usafe of `exact` modifier on `v-on`
		'vue/use-v-on-exact': 2,
		// Require valid attribute names
		'vue/valid-attribute-name': 2,
		// Enforce valid `defineEmits` compiler macro
		'vue/valid-define-emits': 2,
		// Enforce valid `defineProps` compiler macro
		'vue/valid-define-props': 2,
		// Enforce valid `nextTick` function calls
		'vue/valid-next-tick': 2,
		// Enforce valid template root
		'vue/valid-template-root': 2,
		// Enforce valid `v-bind` directives
		'vue/valid-v-bind': 2,
		// Enforce valid `v-cloak` directives
		'vue/valid-v-cloak': 2,
		// Enforce valid `v-else-if` directives
		'vue/valid-v-else-if': 2,
		// Enforce valid `v-else` directives
		'vue/valid-v-else': 2,
		// Enforce valid `v-for` directives
		'vue/valid-v-for': 2,
		// Enforce valid `v-html` directives
		'vue/valid-v-html': 2,
		// Enforce valid `v-if` directives
		'vue/valid-v-if': 2,
		// Enforce valid `v-is` directives
		'vue/valid-v-is': 2,
		// Enforce valid `v-memo` directives
		'vue/valid-v-memo': 2,
		// Enforce valid `v-model` directives
		'vue/valid-v-model': 2,
		// Enforce valid `v-on` directives
		'vue/valid-v-on': 2,
		// Enforce valid `v-once` directives
		'vue/valid-v-once': 2,
		// Enforce valid `v-pre` directives
		'vue/valid-v-pre': 2,
		// Enforce valid `v-show` directives
		'vue/valid-v-show': 2,
		// Enforce valid `v-slot` directives
		'vue/valid-v-slot': 2,
		// Enforce valid `v-text` directives
		'vue/valid-v-text': 2,
		// STRONGLY RECOMMENDED RULES (IMPROVING READABILITY)
		// Enforce attribute naming style on custom components template
		'vue/attribute-hypenation': 1,
		// Enforce specific casing for component definition name
		'vue/compnent-definition-name-casing': 1,
		// Enforce the location of first attribute
		'vue/first-attribute-linebreak': 1,
		// Require or disallow a line break before tag's closing brackets
		'vue/html-closing-bracket-newline': [
			1,
			{
				singleline: 'never',
				multiline: 'always',
			},
		],
		// Require or disallow a space before tag's closing brackets
		'vue/html-closing-bracket-spacing': [
			2,
			{
				startTag: 'never',
				endTag: 'always',
				selfClosingTag: 'always',
			},
		],
		// Enforce end tag style
		'vue/html-end-tags': 2,
		// Enforce consistent indentation in  `<template>`
		'vue/html-indent': [
			2,
			'tab',
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: [],
			},
		],
		// Enforce quotes style of HTML attributes
		'vue/html-quotes': [2, 'double', { avoidEscape: false }],
		// Enforce self-closing style
		'vue/html-self-closing': [
			2,
			{
				html: {
					void: 'never',
					normal: 'always',
					component: 'always',
				},
				svg: 'always',
				math: 'always',
			},
		],
		// Enforce the maximum number of attributes per line
		'vue/max-attributes-per-line': [
			2,
			{
				singleline: {
					max: 1,
				},
				multiline: {
					max: 1,
				},
			},
		],
		// Require a line break before and after the contents of a multiline element
		'vue/multiline-html-element-content-newline': 0,
		// Enforce unfied spacing in mustache interpolations
		'vue/mustache-interpolation-spacing': 1,
		// Disallow multiple spaces
		'vue/no-multi-spaces': 1,
		// Disallow spaces around equal signs in attribute
		'vue/no-spaces-around-equal-signs-in-attribute': 1,
		// Disallow variable declarations from shadwing variables declared in the outer scope
		'vue/no-template-shadow': 2,
		// Enforce that each component shuold be in its own file
		'vue/one-component-per-file': 2,
		// Enforce specific casing for the Prop name in Vue components
		'vue/prop-name-casing': 1,
		// Require default values for props
		'vue/require-default-prop': 2,
		// Require `emits` option with name triggered by `$emits`
		'vue/require-explicit-emits': 1,
		// Require type definitions in props
		'vue/require-prop-types': 2,
		// Require a line break before and after the contents of a singleline element
		'vue/singleline-html-element-content-newline': 2,
		// Enforce `v-bind` directive style
		'vue/v-bind-style': 1,
		// Enforce `v-on` event naming style on custom components in template
		'vue/v-on-event-hypenation': 1,
		// Enforce `v-on` directive style
		'vue/v-on-style': 1,
		// Enforce `v-slot` directive style
		'v/v-slot style': 1,
		// RECOMMENDED RULES (POTENTIALLY DANGEROUS PATTERNS)
		// Enforce order of attributes
		'vue/attributes-order': 1,
		// Enforce order of component top-level elements
		'vue/component-tags-order': 1,
		// Disallow unnecessary `<template>`
		'vue/no-lone-template': 1,
		// Disallow to pass multiple arguments to scoped slots
		'vue/no-multiple-slot-args': 1,
		// Disallow use of `v-html` to prevent XSS attack
		'vue/no-v-html': 1,
		// Enfrce order of properties in components
		'vue/order-in-components': 1,
		// Disallow usage of `this` in template
		'vue/this-in-template': 2,
		// UNCATEGORIZED RULES
		// Disallow use other than available `lang`
		'vue/block-lang': [
			1,
			{
				script: {
					lang: 'ts',
				},
				style: {
					lang: 'scss',
				},
			},
		],
		// Enforce line breaks after opening and before closing block-level tags
		'vue/block-tag-newline': [
			2,
			{
				singleline: 'always',
				multiline: 'always',
				maxEmptyLines: 0,
			},
		],
		// Enforce component API style
		'vue/component-api-style': 2,
		// Enforce specific casing for the component naming style in template
		'vue/component-name-in-template-casing': 1,
		// Enforce the casing od component name in `components` options
		'vue/component-options-name-casing': 1,
		// Enforce declaration style of `defineEmits`
		'vue/define-emits-declaration': 1,
		// Enforce order of `defineEmits` and `defineProps` compiler macros
		'vue/define-macros-order': 1,
		// Enforce declaration style of `defineProps`
		'vue/define-props-declaration': 1,
		// Disallow usage of button without an explicit type attribute
		'vue/html-button-has-type': 1,
		// Enforce unified line break HTML comments
		'vue/html-commment-content-newline': 1,
		// Enforce unified spacing in HTML comments
		'vue/html-comment-content-spacing': 1,
		// Enforce consistent indentation in HTML comments
		'vue/html-comment-indent': 1,
		// Require component name property to match its file name
		'vue/match-component-file-name': 1,
		// Require the registered component name to match the imported component name
		'vue/match-component-import-name': 1,
		// Enforce new lines between multi-line properties in Vue components
		'vue/new-line-between-multi-line-property': 1,
		// Enforce Promise or callback style in `nextTick`
		'vue/next-tick-style': 1,
		// Disallow the use of bare strings in `<template>`
		'vue/no-bare-strings-in-template': 0,
		// Disallow boolean defaults
		'vue/no-boolean-default': [1, 'no-default'],
		// Enforce `inheritAttrs` to be set to `false` when using `v-bind:$attrs`
		'vue/no-duplicate-attr-inheritance': 1,
		// Disallow the `template` `script` `style` block to be empty
		'vue/no-empty-component-block': 1,
		// Disallow to pass multiple object into array to class
		'vue/no-multiple-objects-in-class': 1,
		// Disallow a potential typo in your component property
		'vue/no-potential-component-option-typo': 0,
		// Disallow destructuring to ref objects that can lead to loss of reactivity
		'vue/no-ref-object-destructure': 1,
		// Enforce props with default values to be optional
		'vue/no-required-prop-with-default': 1,
		// Disallow specific block
		'vue/no-restricted-block': 0,
		// Disallow asynchronously called restricted methods
		'vue/no-restricted-call-after-await': 1,
		// Disallow specific classes in Vue components
		'vue/no-restricted-class': 2,
		// Disallow specific component option
		'vue/no-restricted-component-options': 2,
		// Disallow specific custom event
		'vue/no-restricted-custom-event': 2,
		// Disallow specific HTML elements
		'vue/no-restricted-html-elements': 2,
		// Disallow specific props
		'vue/no-restricted-props': 2,
		// Disallow specific attribute
		'vue/no-restricted-static-attribute': 2,
		// Disallow specific argument in `v-bind`
		'vue/no-restricted-v-bind': 2,
		// Disallow static inline `style` attributes
		'vue/no-static-inline-styles': 2,
		// Disallow `target='_blank'` attribute without `rel='noopener noreferrer'`
		'vue/no-template-target-blank': 0,
		// Disallow `this` usage in a `beforeRouteEnter` method
		'vue/no-this-in-before-route-enter': 1,
		// Disallow use of undefined components in `<template>`
		'vue/no-undef-components': 2,
		// Disallow undefined properties
		'vue/no-undef-properties': 2,
		// Disallow unsupported Vue.js syntax on the specified version
		'vue/no-unsupported-features': 2,
		// Disallow unused properties
		'vue/no-unused-properties': 2,
		// Disallow unused refs
		'vue/no-unused-refs': 2,
		// Disallow unnecessary mustache interpolations
		'vue/no-useless-mustaches': 2,
		// Disallow unnecessary `v-bind` directives
		'vue/no-useless-v-bind': 2,
		// Disallow use of v-text
		'vue/no-v-text': 1,
		// Require or disallow newlines between sibling tags in template
		'vue/padding-line-between-tags': 2,
		// Enforce `Boolean` comes first in component prop types
		'vue/perfer-prop-type-boolean-first': 0,
		// Require static class names in template to be in a separate `class` attribute
		'vue/prefer-separate-static-class': 1,
		// Require shorthand from attribute when `v-bind`value is `true`
		'vue/prefer-true-attribute-shorthand': 1,
		// Require the component to be directly exported
		'vue/require-direct-export': 1,
		// Require type definitions in emits
		'vue/require-emit-validator': 1,
		// Require declare public properties using `expose`
		'vue/require-expose': 1, // TODO check it
		// Require a name property in Vue components
		'vue/require-name-property': 1, // TODO check it
		// Require props to have a comment
		'vue/require-prop-comment': 1,
		// Enforce consistent indentation in `<script>``
		'vue/script-indent': 1,
		// Enforce sort-keys in a manner that is compatible with order-in-components
		'vue/sort-keys': 1,
		// Enforce static class names order
		'vue/static-class-names-order': 0,
		// Enforce `v-for` directive's delimiter style
		'vue/v-for-delimiter-style': 1,
		// Enfroce writing style for handlers in `v-on` directives
		'vue/v-on-handler-style': 0,
		//EXTENSION RULES
		// Enforce linebreaks after opening and before closing array brackets in `<template>`
		'vue/array-bracket-newline': [1, 'consistent'],
		// Enforce consistent spacing inside array brackets in `<template>`
		'vue/array-bracket-spacing': [1, 'always', { singleValue: true }],
		// Enforce consistent spacing before and after the arrow in arrow functions in `<template>`
		'vue/arrow-spacing': 1,
		// Disallow or enforce spaces inside of blocks after opening block and before closing block in `<template>`
		'vue/block-spacing': 1,
		// Enforce consistent brace style for blocks in `<template>`
		'vue/brace-style': [1, '1tbs'],
		// Enforce camelcase naming convention in `template`
		'vue/camelcase': [
			1,
			{ properties: 'never', ignoreDestructuring: false },
		],
		// Require or disallow trailing commas in `<template>`
		'vue/comma-dangle': [1, 'never'],
		// Enforce consistent spacing before and after commas in `<template>`
		'vue/comma-spacing': 1,
		// Enforce consistent comma style in `<template>`
		'vue/comma-style': 1,
		// Enforce consistent newlines before and after dots in `<template>`
		'vue/dot-location': [1, 'property'],
		// Enforce dot notation whenever possible in `<template>`
		'vue/dot-notation': 1,
		// Require the use of `===` and `!==` in `<template>`
		'vue/eqeqeq': 2,
		// Require or disallow spacing between function identifiers and their invocations in `<template>`
		'vue/func-call-spacing': [2, 'never'],
		// Enforce consistent spacing between keys and values in object literal properties in `<template>`
		'vue/key-spacing': 1,
		// Enforce consistent spacing before and after keywords in `<template>`
		'vue/keyword-spacing': 1,
		// Enforce a maximum line length in `.vue` files
		'vue/max-len': [
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
		// Enforce newlines between operand of ternary expressions in `<template>`
		'vue/multiline-ternary': [1, 'always-multiline'],
		// Disallow constant expressions in conditions in `<template>`
		'vue/no-constant-conditions': 1,
		// Disallow empty destructuring patterns in `<template>``
		'vue/no-empty-pattern': 2,
		// Disallow unnecessary parenthesis in `<template>`
		'vue/no-extra-parens': 1,
		// Disallow irregular whitespace in `.vue`files
		'vue/no-irregular-whitespace': 2,
		// Disallow literal numbers that lose precision in `<template>`
		'vue/no-loss-of-precision': 1,
		// Disallow specified syntax in `<template>`
		'vue/no-restricted-syntax': 0,
		// Disallow sparse arrays in `<template>`
		'vue/no-sparse-arrays': 2,
		// Disallow unnecessary concatenation of literals or template literals in `<template>`
		'vue/no-useless-concat': 2,
		// ENforce consistent line breaks after opening and befre closing braces in `<template>`
		'vue/object-curly-newline': [
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
		// Enforce consistent spacing inside braces in  `<template>`
		'vue/object-curly-spacing': [1, 'always'],
		// Enforce placing object properties on separate lines in `<template>`
		'vue/object-property-newline': [
			2,
			{
				allowAllPropertiesOnSameLine: false,
			},
		],
		// Require or disallow method and property shorthand syntax for object literals in `<template>`
		'vue/object-shorthand': 0,
		// Enforce consistent linebreak style for operators in `<template>`
		'vue/operator-linebreak': [1, 'before', { overrides: { '=': 'none' } }],
		// Require template literals instead of string concatenation in `<template>`
		'vue/prefer-template': 2,
		// Require quotes around object literal property names in `<template>`
		'vue/quote-props': [
			'warn',
			'as-needed',
			{ keywords: false, unnecessary: true, numbers: false },
		],
		// Enforce consistent spacing inside parenthesis in `<template>`
		'vue/space-in-parens': [1, 'always'],
		// Require spacing around infix operators in `<template>`
		'vue/space-infix-ops': 1,
		// Enforce consistent spacing before or after unary operators in `<template>`
		'vue/space-unary-ops': [
			2,
			{
				words: true,
				nonwords: false,
				overrides: {},
			},
		],
		// Require or disallow spacing around embedded expressions of template strings in `<template>`
		'vue/template-curly-spacing': 2,
	},
}
