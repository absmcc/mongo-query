//import mongo libr.
const { MongoClient, ServerApiVersion, } = require('mongodb');

//connect to Mongo/Atlas with connection string
const {uri} =require('./dbsecrets.js');

const client = new MongoClient(uri,{useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});

//connect to sample_mflix database
const db = client.db("sample_mflix");

// Query

// let's get a movie from the "movies" collection// search by title for "Back to the Futre"


db.collection('movies')
.findOne({title:  'Back to the Future'}, 
(err, results) => {
    if (err){
    console.error();
    }
    //lets output the result 
    console.log(results); 
    client.close();
}); 
