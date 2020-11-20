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

// common library
{
    name: 'index',
    entry: [
        './src/base/base.js',
        './src/base/base.scss',
    ],
    output: { path: public, filename:'base.js' },
    performance: { hints: false } // > max-recommended, will be cached anyway
},

// first page
{
    name: 'index',
    entry: [
        './src/index/index.js',
        './src/index/index.html',
    ],
    output: { path: public, filename:'index.js' },
},

// a sample application
{
    name: 'foo',
    entry: [
        './src/foo/foo.js',
        './src/foo/foo.html',
    ],
    output: { path:public, filename:'foo.js' },
},

].filter(Boolean)
