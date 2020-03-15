import babel from 'rollup-plugin-babel';

export default [{
    external: ['react'],
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: false,
            globals: {
                react: 'React',
            },
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: false,
            globals: {
                react: 'React',
            },
        }
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**/*',
            presets: [
                ['@babel/preset-env', {
                    modules: false,
                }],
                '@babel/preset-react',
            ],
        })
    ],
}
];
