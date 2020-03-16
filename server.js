const express = require('express')
const app = express()

app.get('/',function (req,res) {
    res.send("Hello World !")
})

app.listen(1234,function () {
    console.log('Example app listening on port 3000!')
})