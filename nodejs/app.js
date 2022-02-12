const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("Imagem Docker!")
})

app.listen(port, () => {
    console.log(`running on the port: ${port}`)
})