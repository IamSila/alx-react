const path = require('path');


module.exports = {
    entry: {
        main: path.resolve(__dirname,'./src/index.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        hot: true,
    },
    module: {
        rules: [
                {
                        test: /\.css$/i,
                        use: ["css-loader", "style-loader"],
                },
                {
                        test: /\.(?:ico|gif|png|jpe?g|svg)$/i,
                        type: 'asset/resource',
                        use: [
                                "file-loader",
                                {
                                        loader: "image-webpack-loader",
                                        options: {
                                                    bypassingOnDebug: true,
                                                    disable: true,
                                        },
                                },
                        ],
                },
        ],
    },
    devtool: 'inline-source-map',
    mode: 'development',

}
