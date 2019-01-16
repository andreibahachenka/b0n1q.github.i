const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: 'es2015.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ["es2015", "es2016", "es2017"] }
                    }
                ]
            }
        ]
    }
};