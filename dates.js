const MongoClient = require('mongodb').MongoClient;

const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'date';

(async function() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName);
    const col = db.collection('dates');

    // Insert multiple documents
    let r = await db.collection('dates').insertOne({ date: new Date() });
    assert.equal(1, r.insertedCount);
    console.log("insertion reussie");



    const cursor = col.find();

    // Iterate over the cursor
    while(await cursor.hasNext()) {
    const doc = await cursor.next();
    console.dir(doc);
}

  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();