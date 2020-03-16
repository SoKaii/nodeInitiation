const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/',function (req,res) {
    res.send("Hello World !")
})

app.get('/hello',function (req,res) {
    res.send("Bonjour, " + req.query.nom)
})

app.listen(PORT,function () {
    console.log('Example app listening on port ${PORT}!')
})