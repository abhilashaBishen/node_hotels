const mongoose = require('mongoose');

//Define the MongoDb connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

//set a mongodb connection

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

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