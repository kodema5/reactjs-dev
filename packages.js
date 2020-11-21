// list each apps below
const path = require('path')
const target = path.resolve(__dirname, 'build')
const public = path.resolve(__dirname, 'build', 'public')

module.exports = [
// a service (ex: serving at port 3000)
{
    name: 'server',
    entry: './src/server/index.js',
    output: {
        path: target,
        filename: 'server.js',
    },
    target: 'node'
},

// common base library
{
    name: 'base',
    entry: [
        './src/base/base.js',
        './src/base/base.scss',
    ],
    output: { path: public, filename:'base.js' },
    performance: { hints: false } // > max-recommended, will be cached anyway
},

// pages
{
    name: 'pages',
    entry: {
        index: [ './src/index/index.js', './src/index/index.html'],
        foo: [ './src/foo/foo.js', './src/foo/foo.html']
    },
    output: {
        path: public, filename:'[name].js'
    }
}
].filter(Boolean)
