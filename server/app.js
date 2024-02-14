// express package
const express = require('express');
// handlebars package
const {engine} = require('express-handlebars');
// body-parser package
const bodyParser = require('body-parser');
// dotenv package
require('dotenv').config();
// app
const app = express();
// change localhost port here


// POSTGRESQL CONNECTION
// connects to the user database routes file
const userRoutes = require('./src/users/routes');

// PARSE APPLICATION
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// STATIC FILES
// when using handlebars, etc. it will begin at public level.
// VERY IMPORTANT
app.use(express.static('public'));

// JSON
app.use(express.json());

// TEMPLATING ENGINE
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');

// ROUTER
app.get('/', (req, res) => {
    res.render('home.hbs')
});

app.get('/login', (req, res) => {
    res.render('login.hbs')
});

app.get('/register', (req, res) => {
    res.render('register.hbs')
});

// DB URL PATH
// has to after the app.get and this code is to connect to the user database routes file and our user SQL file
// type this path to see the user database
app.use('/api/users', userRoutes);

module.exports = app;