const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.get('/',function (req,res) {
    res.send("Hello World !")
})

app.get('/hello',function (req,res) {
    if(req.query.nom) {
        res.send("Bonjour, " + req.query.nom)
    } else {
        res.send("Quel est votre nom ? ")
    }
})

app.post('/chat',function (req, res) {
    switch(req.body.msg) {
        case "ville" : 
            res.send("Nous sommes à Paris\n");
            break;
        case "meteo" : 
            res.send("Il fait beau\n");
            break;
        default : 
            res.send("Réponse par défaut\n")
            break;
    }
})

app.listen(PORT,function () {
    console.log('Example app listening on port ${PORT}!')
})