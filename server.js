const express = require('express');

const app = express();

const db = require('./db');

require('dotenv').config();

app.use(express.json());

const PORT = process.env.PORT || 3000;

const passport = require('./auth');

//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

// const LocalStrategy = require('passport-local').Strategy;

// const Person = require('./models/person');
app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local', { session: false })


app.get('/', function (req, res) {

    res.send('welome to my hotel... How ican help you');

})

app.get("/chefs", function (req, res) {

    res.send('this is data about chef in our hotel');
})

//use the routers
app.use('/menu', menuRoutes);
app.use('/person', personRoutes);

app.listen(PORT, () => {

    console.log('server is running at http://localhost:3000')
}

);