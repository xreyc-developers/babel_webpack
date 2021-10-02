var path = require('path');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

module.exports = {
    // SET IF ITS READY FOR PRODUCTION
    mode: mode,
    // ENTRY POINT FOR WEBPACK, DEFAULT: src
    // entry: './src/', (FOR ALL)
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    // without additional settings, this will reference .babelrc
                    loader: 'babel-loader'
                }
            }
        ]
    },
    // TELLS WHERE/WHAT FILE SOMETHING IS EXUCTED ON THE CODE (DEVTOOL)
    devtool: 'source-map',
    // LIVE SERVER FOR BUNDLED CODE
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
    }
}