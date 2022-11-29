export default {
    extends: [
        './problems',
        './suggestions',
        './styling',
        'prttier'
    ],
    plugins: [
        'prettier',
        'imports'
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    }
}