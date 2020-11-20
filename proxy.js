// node proxy.js [listen-to-port] [target-url] [path]
// routes :[port]/ to target-url/path

const args = process.argv.slice(2)
const PORT = args[0] || 8081
const PATH = args[1] || 'http://localhost:3000/api'

const TARGET = new URL(PATH)


const express = require('express')
const app = express()

const { createProxyMiddleware } = require('http-proxy-middleware')
app.use('/', createProxyMiddleware({
    target: TARGET.origin,
    ws:true,
    pathRewrite: (path, req) => {
        let a = TARGET.pathname + path
        console.log('-- proxy>:', a)
        return a
    }
}))

app.listen(PORT, () => {
    console.log(`Proxying at ${PORT} to ${PATH}`)
})