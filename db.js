const mongoose = require('mongoose');
require('dotenv').config();

//Define the MongoDb connection URL
//const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

// const mongoURL= process.env.MONGODB_URL_LOCAL;



const mongoURL = process.env.MONGODB_URL

//set a mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//get the default connection
//Mongoose maintain a default connection object representing the MongoDB connection.
const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connected to mongodb serever");
})

db.on('error',(err)=>{
    console.error('Mongodb connection error',err)
})

db.on('disconnected',()=>{
    console.log('mongodb disconnected');
})


module.exports = db;