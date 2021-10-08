const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    // SET IF ITS READY FOR PRODUCTION
    mode: mode,
    // ENTRY POINT FOR WEBPACK, DEFAULT: src
    // entry: './src/', (FOR ALL)

    // SINGLE BUNDLE
    /*
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    */
    //
    
    entry: { 
        app: "./src/index.js",
        home: "./src/pages/home/index.js",
        about: "./src/pages/about/index.js"
    },
    output: { 
        filename: "[name]-bundle.js",
        path: __dirname + '/dist/js',
        clean: true
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
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: '../index.html',
            template: 'src/index.html',
            chunks: ["app"],
        }),
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: '../pages/home.html',
            template: 'src/pages/home/index.html',
            chunks: ["home"],
        }),
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: '../pages/about.html',
            template: 'src/pages/about/index.html',
            chunks: ["about"],
        }),
    ],
    // TELLS WHERE/WHAT FILE SOMETHING IS EXUCTED ON THE CODE (DEVTOOL)
    //devtool: 'source-map',
    // LIVE SERVER FOR BUNDLED CODE
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
    }
}