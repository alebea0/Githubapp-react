module.exports = {
    parser: 'babel-eslint',
        env: 
        {
            browser: true,
            commonjs: true,
            es6: true,
            node: true,
            jest: true,
        },
            parserOptions: 
            {
                ecmaVersion: 2020,
                ecmaFeatures: {
                impliedStrict: true,
                jsx: true,
            },
            sourceType: 'module',
            },
            plugins: ['react', 'react-hooks'],
            extends: [
                'eslint:recommended',
                'plugin:react/recommended',
                'plugin:react-hooks/recommended',
                ],
                settings: {
                react: {
                version: 'detect',
                },
            },
            rules: {
        // En esta sección se pueden incluir reglas personalizadas...
        // Por ejemplo, si no se quiere utilizer el paquete prop-types,
        // se puede apagar esa regla recomendada con: 'react/prop-types': ['off']
        },
   };