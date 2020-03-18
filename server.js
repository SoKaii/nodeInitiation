const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb+srv://sokaii:sokaiipwd@chat-bot-hnjd7.mongodb.net/test?retryWrites=true&w=majority';
const dbName = 'chat-bot';
const express = require('express')
var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
const fs = require('fs');

app.get('/', function (req, res) {
      res.send('Hello World');
})

app.get('/hello', function (req, res) {
    if (req.query.nom) {
      res.send('Bonjour, '+req.body.nom+' !');
    }else {
      res.send('Quel est votre nom ?');
    }
})

app.post('/chat', function (req, res) {
  (async function() {
    const client = new MongoClient(url);
    try {
      await client.connect();
      console.log("Connected correctly to server");
      const db = client.db(dbName);
      const col = db.collection('messages');
      if (req.body.msg === 'ville') {
        let r = await db.collection('messages').insertMany([{from : "user",message : req.body.msg},{from : "bot",message : 'Nous sommes à Paris'}]);
        assert.equal(2, r.insertedCount);
        res.send('Nous sommes à Paris')
      } else if (req.body.msg === 'météo') {
        let r = await db.collection('messages').insertMany([{from : "user",message : req.body.msg},{from : "bot",message : 'Il fait beau'}]);
        assert.equal(2, r.insertedCount);
        res.send('Il fait beau')
      } else {
        if (/ = /.test(req.body.msg)) {
          const [ cle, valeur ] = req.body.msg.split(' = ')
          const valeursExistantes = readValuesFromFile();
          fs.writeFileSync('response.json', JSON.stringify({
            ...valeursExistantes,
            [cle]: valeur
          }))
          res.send('Merci pour cette information !')
        } else {
          const cle = req.body.msg
          const reponse = readValuesFromFile()[cle]
          res.send(cle + ': ' + reponse)
        }
      }
      const cursor = col.find();
      while(await cursor.hasNext()) {
      doc = await cursor.next();
      console.dir(doc);
  }
  res.send(doc)
    } catch (err) {
      console.log(err.stack);
    }
    // Close connection
    client.close();
  })();

})

function readValuesFromFile() {
  const reponses = fs.readFileSync('response.json', { encoding: 'utf8' });
  const valeursExistantes = JSON.parse(reponses);
  return valeursExistantes;
}

app.get('/messages/all',function(req,res){
var doc = [];
  (async function() {
    const client = new MongoClient(url);
    try {
      await client.connect();
      console.log("Connected correctly to server");
      const db = client.db(dbName);
      const col = db.collection('messages');
      const cursor = col.find();
      // Iterate over the cursor
      var i=1
      while(await cursor.hasNext()) {
      doc[i] = await cursor.next();

      i=i+1;
  }
   console.log(doc);
   res.send(doc)
    } catch (err) {
      console.log(err.stack);
    }
    // Close connection
    console.log("Client close");
    client.close();
  })();
})
app.delete('/messages/last',function(req,res){
  (async function() {
    const client = new MongoClient(url);
    try {
      await client.connect();
      console.log("Connected correctly to server");
      const db = client.db(dbName);
      const col = db.collection('messages');
      for(i=0;i<2;i++) {
          col.findOneAndDelete({},{"sort": { "_id": -1 }})
        }
res.send('last conversation deleted');
  }catch (err) {
    console.log(err.stack);
  }
client.close();
})();
})

app.listen(process.env.PORT || 3000 , function () {
  console.log('Example app listening on port 3000!')
})
