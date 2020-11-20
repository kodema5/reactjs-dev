// a template of a service
// nodemon app.js

const args = process.argv.slice(2)
const PORT = args[0] || 3000
const PUBLIC = args[1] || 'public'

const express = require('express')
const app = express()
app.use(express.json())


// implement API
//
app.use('/api', (req, res) => {
    res.json({
        hello: req.path,
        ts: new Date(),
    })
})


// for static/public file
//
const path = require('path')
const publicDir = path.join(__dirname, PUBLIC)
app.use(express.static(publicDir, {
    dotfiles: 'ignore',
}))


app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})