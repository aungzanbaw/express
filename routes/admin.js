var express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb');
// const title = process.env.TITLE;
const books = [
	{
		title: 'War and Peace',
		genre: 'Historical Fiction',
		author: 'Lev Nikolayevich Tolstoy',
		read: false
	},
	{
		title: 'Les Misérables',
		genre: 'Historical Fiction',
		author: 'Victor Hugo',
		read: false
	},
	{
		title: 'The Time Machine',
		genre: 'Science Fiction',
		author: 'H. G. Wells',
		read: false
	},
	{
		title: 'A Journey into the Center of the Earth',
		genre: 'Science Fiction',
		author: 'Jules Verne',
		read: false
	},
	{
		title: 'The Dark World',
		genre: 'Fantasy',
		author: 'Henry Kuttner',
		read: false
	},
	{
		title: 'The Wind in the Willows',
		genre: 'Fantasy',
		author: 'Kenneth Grahame',
		read: false
	},
	{
		title: 'Life On The Mississippi',
		genre: 'History',
		author: 'Mark Twain',
		read: false
	},
	{
		title: 'Childhood',
		genre: 'Biography',
		author: 'Lev Nikolayevich Tolstoy',
		read: false
	}];

router.get('/', function(req, res, next) {
  const URL = process.env.URL;
  const dbName = 'Library';
  (async function(){
		let client;
    try {
			client = await MongoClient.connect(URL);
			const db = client.db(dbName);
			const reponse = await db.collection('books').insertMany(books);
			res.json(reponse);
    } catch (error) {
			console.log(error);
    }
  })();
});

module.exports = router;