// express package
const express = require('express');
const {engine} = require('express-handlebars');
const app = express();
// change localhost port here
const port = process.env.PORT || 8080;

// bcrypt package - for password hashing
const bcrypt = require('bcrypt');

// connects to the user database routes file
const userRoutes = require('./src/users/routes');

// Engine
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout:false,
    layoutsDir: 'views'
}));

// set the view engine to handlebars
app.set('view engine', 'hbs');

// middleware to post in json format
app.use(express.static('public'));
app.use(express.json());

// Router
app.get('/index', (req, res) => {
    res.render('index.hbs');
});


// has to after the app.get and this code is to connect to the user database routes file and our user SQL file
// type this path to see the user database
app.use('/api/users', userRoutes);

// start the server on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});