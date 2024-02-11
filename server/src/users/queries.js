/* All SQL queries are stored here.


*/

// get all users from the db
const getUsers = 'SELECT * FROM users';


// get a single user from the db
// $1 is a placeholder for the username it acts like a variable name and should be replaced with the actual value when the query is run
const getUserByUsername = 'SELECT * FROM users WHERE username = $1';


const checkUsernameExists = 'SELECT s FROM users s WHERE s.username = $1';
const checkEmailExists = 'SELECT s FROM users s WHERE s.email = $1';


module.exports = {
    getUsers,
    getUserByUsername,
    checkUsernameExists,
    checkEmailExists,
};