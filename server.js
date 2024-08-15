const express = require('express');

const app = express();

const db = require('./db');


const bodyParser = require('body-parser');
app.use(bodyParser.json());//it willstore in req.body

const personRoutes = require('./routes/personRoutes');

app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes')

app.use('/menu',menuRoutes);

app.get('/',function(req,res){
    res.send('welome to my hotel... How ican help you');
})


app.listen(3000,()=>{
    console.log('server is running at http://localhost:3000')}
);