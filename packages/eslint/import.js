module.export = {
	plugins: ['import'],
	rules: {
		// Forbid any invalid exports, i.e. re-export of the same name
		'import/export': 2,
		// Forbid imported names marked with `@deprecated` documentation tag
		'import/no-deprecated': 1,
		// Forbid empty named import blocks
		'import/no-empty-named-blocks': 2,
		// Forbid the use of extraneous packages
		'import/no-extraneous-dependencies': 1,
		// Forbid the use od mutable exports with `var` or `let`
		'import/no-mutable-exports': 2,
		// Forbid use of exported name as identifier of default export
		'import/no-named-as-default': 2,
		// Forbid use of exported name as property of default export
		'import/no-named-as-default-member': 2,
		// Forbid modules without exports, or exports without matching import in another module
		'import/no-unused-modules': 0,
		// Forbid AMD `require` and `define` calls
		'import/no-amd': 2,
		// Forbid CommonJS `require` calls and `module.exports` or `exports.*`
		'import/no-commonjs': 1,
		// Forbid import statements with CommonJS `module.exports`
		'import/no-import-module-exports': 2,
		// Forbid Node.js builtin modules
		'import/no-nodejs-modules': 0,
		// Forbid potentially ambiguos parse goal (`script` vs `module`)
		'import/unambiguous': 2,
		// Ensure a default export is present given a default import
		'import/default': 2,
		// Ensure named imports correspond to a named export in the remote file
		'import/named': 2,
		// Ensure imported namespaces contain dereferenced properties as they are dereferenced
		'import/namespace': 2,
		// Forbid import of modules using absolute path
		'import/no-absolute-path': 2,
		// Forbid a module from importing a module with a dependency path back to itself
		'import/no-cycle': 2,
		// Forbid `require()` calls with expressions
		'import/no-dynamic-require': 1,
		// Forbid importing the submodules of other modules
		'import/no-internal-modules': 0,
		// Forbid importing packages through relative paths
		'import/no-relative-packages': 0,
		// Forbid importing modules from parent directories
		'import/no-relative-parent-imports': 0,
		// Enforce which files can be imported in a given folder
		'import/no-restricted-paths': 0, // DO IT in projects directly
		// Forbid a module from importing itself
		'import/no-self-import': 2,
		// Ensure imports point to a file/module that can be resolved
		'import/no-unresolved': 2,
		// Forbid unnecessary path segments in import and require statements
		'import/no-useless-path-segments': 1,
		// Forbid webpack loader syntax in imports
		'import/no-webpack-loader-syntax': 2,
		// Enforce or ban te use of inline type-only markers for named imports
		'import/consistent-type-specifier-style': 1,
		// Enforce a leading comment with the webpackChunkName for dynamic imports
		'import/dynamic-import-chunkname': 2,
		// Ensure all exports appear after other statements
		'import/exports-last': 0,
		// Ensure consistent use of file extension within the import path
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				mjs: 'never',
				jsx: 'never',
			},
		],
		// Ensure all imports appear before other statements
		'import/first': 2,
		// Prefer named exports to be grouped together in a single export declaration
		'import/group-exports': 0,
		// Enforce the maximum number of dependencies a module can have
		'import/max-dependencies': 0,
		// Enforce a newline after import statements
		'import/newline-after-import': 2,
		// Forbid anonymous values as default exports
		'import/no-anonymous-default-export': 2,
		// Forbid default exports
		'import/no-default-export': 0,
		// Forbid repeated import of the same module in multiple places
		'import/no-duplicates': 2,
		// Forbid named default exports
		'import/no-named-default': 0,
		// Forbid namespace (a.k.a. "wildcard" `*`) imports
		'import/no-namespace': 0,
		// Forbid unassigned imports
		'import/no-unassigned-import': [
			1,
			{ allow: ['**/*.css', '**/*.scss'] },
		],
		// Enforce a convention in module import order
		'import/order': 2,
		// Prefer a default export if module exports a single name
		'import/prefer-default-export': 0,
	},
}
