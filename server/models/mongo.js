/*  B"H
*/
require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://<${process.env.MONGO_USER}:${process.env.MONGO_PASS}@workoutcluster.xuajk.mongodb.net/AppUsers?retryWrites=true&w=majority`;

const client = new MongoClient(uri);


const isConnected = client.connect();


module.exports = {
    client, isConnected
}