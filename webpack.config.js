module.exports = {
    entry: "./main1.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {test: /\.(jpg|png)$/,
            loader: 'file-loader',
            options: {
                name: '[path][name].[hash].[ext]',
            },
        }
            
        ]
    }
};