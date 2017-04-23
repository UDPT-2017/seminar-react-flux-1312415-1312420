module.exports = {
    entry:[
        './src/index.jsx'
    ],
    output: {
        path: __dirname,
        filename: 'app/js/main.js'
    },
    module:{
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}