/* This is where the logic will be stored for each route.


*/

// imports the database connection
const pool = require('../../db');
const queries = require('./queries');


// get users function
const getUsers = (req, res) => {
    // the query method has 2 parameters - first is the SQL statement to get in the database,
    // then has an error and results callback
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

// created module.exports as an object so that we can export multiple functions
module.exports = {
    getUsers,
};