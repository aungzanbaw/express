var express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb');

const title = process.env.TITLE;

/* GET home page. */
router.get('/', function(req, res, next) {
  const URL = process.env.URL;
  const dbName = 'Library';
  (async function(){
		let client;
    try {
			client = await MongoClient.connect(URL);
			const db = client.db(dbName);
			const reponse = await db.collection('books').find().toArray();
			res.json(reponse);
    } catch (error) {
			console.log(error);
    }
  })();
});

module.exports = router;
