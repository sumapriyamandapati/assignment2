const express = require('express')
const app = express()
const port = 3000

const fileServerMiddleWare = express.static('public');

app.use('/', fileServerMiddleWare);

app.listen(port, () => {
    console.log(`Assignment 2 app listening on port ${port}`)
})
