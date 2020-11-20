const path = require('path')

const config = {
    optimization: {
        // minimize:true
    },

    mode: 'development',

    module: {
        rules: [{
            test: /\.js$/,
            use: [
                { loader:'babel-loader' },
            ]
        }, {
            test: /\.s[ac]ss$/i,
            use: [
                { loader:'file-loader', options:{ name:'[name].css' } },
                { loader:'sass-loader' },
            ]
        }, {
            test: /\.(png|jpe?g|gif|html)$/i,
            use: [
                { loader:'file-loader', options:{ name:'[name].[ext]' } },
            ]
        }],
    },

    // devtool: 'source-map'
}

module.exports = require('./packages.js')
    .map((p) => {
        return !p.name
            ? p
            : Object.assign({}, config, p)
    })
