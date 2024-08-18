const express = require('express');

const app = express();

const db = require('./db');
require('dotenv').config();


const bodyParser = require('body-parser');
app.use(bodyParser.json());//it willstore in req.body
const PORT = process.env.PORT || 3000;
const personRoutes = require('./routes/personRoutes');

app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes')

app.use('/menu',menuRoutes);

app.get('/',function(req,res){

    res.send('welome to my hotel... How ican help you');
    
})

app.get("/chefs", function(req,res){
   
    res.send('this is data about chef in our hotel');
  

})

app.listen(PORT,()=>{
 
    console.log('server is running at http://localhost:3000')}
 
);