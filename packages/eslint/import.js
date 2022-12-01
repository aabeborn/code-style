export default {
    plugins: ['import'],
    rules: {
        // Forbid any invalid exports, i.e. re-export of the same name
        'import/export':
        // Forbid imported names marked with `@deprecated` documentation tag
        'import/no-deprecated':
        // Forbid empty named import blocks
        'import/no-empty-named-blocks':
        // Forbid the use of extraneous packages
        'import/no-extraneous-dependencies':
        // Forbid the use od mutable exports with `var` or `let`
        'import/no-mutable-exports':
        // Forbid use of exported name as identifier of default export
        'import/no-named-as-default':
        // Forbid use of exported name as property of default export
        'import/no-named-as-default-member':
        // Forbid modules without exports, or exports without matching import in another module
        'import/no-unused-modules':
        // Forbid AMD `require` and `define` calls
        'import/no-amd':
        // Forbid CommonJS `require` calls and `module.exports` or `exports.*`
        'import/no-commonjs':
        // Forbid import statements with CommonJS `module.exports`
        'import/no-import-module-exports':
        // Forbid Node.js builtin modules
        'import/no-nodejs-modules':
        // Forbid potentially ambiguos parse goal (`script` vs `module`)
        'import/unambiguous':
        // Ensure a default export is present given a default import
        'import/default':
        // Ensure named imports correspond to a named export in the remote file
        'import/named':
        // Ensure imported namespaces contain dereferenced properties as they are dereferenced
        'import/namespace':
        // Forbid import of modules using absolute path
        'import/no-absolute-path':
        // Forbid a module from importing a module with a dependency path back to itself
        'import/no-cycle':
        // Forbid `require()` calls with expressions
        'import/no-dynamic-require':
        // Forbid importing the submodules of other modules
        'import/no-internal-modules':
        // Forbid importing packages through relative paths
        'import/no-relative-packages':
        // Forbid importing modules from parent directories
        'import/no-relative-parent-imports':
        // Enforce which files can be imported in a given folder
        'import/no-restricted-paths':
        // Forbid a module from importing itself
        'import/no-self-import':
        // Ensure imports point to a file/module that can be resolved
        'import/no-unresolved':
        // Forbid unnecessary path segments in import and require statements
        'import/no-useless-path-segments':
        // Forbid webpack loader syntax in imports
        'import/no-webpack-loader-syntax':
        // Enforce or ban te use of inline type-only markers for named imports
        'import/consistent-type-specifier-style':
        // Enforce a leading comment with the webpackChunkName for dynamic imports
        'import/dynamic-import-chunkname':
        // Ensure all exports appear after other statements
        'import/exports-last':
        // Ensure consistent use of file extension within the import path
        'import/extensions':
        // Ensure all imports appear before other statements
        'import/first':
        // Prefer named exports to be grouped together in a signle export declaration
        'import/group-exports':
        // Enforce the maximum number of dependencies a module can have
        'import/max-dependencies':
        // Enforce a newline after import statements
        'import/newline-after-import':
        // Forbid anonymous values as default exports
        'import/no-anonymous-default-export':
        // Forbid default exports
        'import/no-default-export':
        // Forbid repeated import of the same module in multiple places
        'import/no-duplicates':
        // Forbid named default exports
        'import/no-named-default':
        // Forbid namespace (a.k.a. "wildcard" `*`) imports
        'import/no-namespace':
        // Forbid unassigned imports
        'import/no-unassigned-import':
        // Enforce a convention in module import order
        'import/order':
        // Prefer a default export if module exports a single name
        'import/prefer-default-export':

    }
}