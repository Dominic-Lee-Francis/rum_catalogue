/* This is where the logic will be stored for each route.


*/

// imports the database connection
const pool = require('../../db');
// imports the SQL queries
const queries = require('./queries');


// users function
const getUsers = (req, res) => {
    // the query method has 2 parameters - first is the SQL statement to get in the database,
    // then has an error and results callback
    // instead of writing the SQL statement here, we import variable name from the queries file 'queries.getUsers'
    pool.query(queries.getUsers, (error, results) => {
        // just throws error if there is one
        if (error) {
            throw error;
        }
        // res is response not results
        // status 200 means everything is successful and it then sends the rows from the database in json format
        res.status(200).json(results.rows);
    });
};

const getUserByUsername = (req, res) => {
    const username = req.params.username;
    pool.query(queries.getUserByUsername, [username], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const addUser = (req, res) => {
    const { username, email, password, subscription_status, full_name, date_of_birth, district } = req.body;

    //check if username or email exists
    // takes the query from the queries file and checks if the username or email already exists before moving on
    pool.query(queries.checkUsernameExists, [username], (error, results) => {
        if (results.rows.length) {
            res.send('Username already exists');
        }
    });
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send('Email already exists');
        }
    });
    // add user to db
    pool.query(queries.addUser, [username, email, password, subscription_status, full_name, date_of_birth, district], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(201).send(`You were added successfully! Welcome ${username}!`);
        console.log('User added successfully!');
    });
};

const deleteUser = (req, res) => {
    const username = req.params.username;

    pool.query(queries.getUserByUsername, [username], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send(`No user found with the username: ${username}`)
        }

        pool.query(queries.deleteUser, [username], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send(`User deleted with username: ${username}`);
        });
    });
};

const updateUserEmail = (req, res) => {
    const username = req.params.username;
    const { email } = req.body;

    pool.query(queries.getUserByUsername, [username], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send(`No user found with the username: ${username}`)
        }
        
        pool.query(queries.updateUserEmail, [email, username], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send(`${username}'s email has been updated to: ${email}`);
        });
    });
};

// created module.exports as an object so that we can export multiple functions
module.exports = {
    getUsers,
    getUserByUsername,
    addUser,
    deleteUser,
    updateUserEmail,
};