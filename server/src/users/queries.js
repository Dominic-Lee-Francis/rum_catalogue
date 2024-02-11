/* All SQL queries are stored here.


*/

// get all users from the db
const getUsers = 'SELECT * FROM users';


// get a single user from the db
// $1 is a placeholder for the username it acts like a variable name and should be replaced with the actual value when the query is run
const getUserByUsername = 'SELECT * FROM users WHERE username = $1';
const getUserByUsers_id = 'SELECT * FROM users WHERE users_id = $1';


// check if username or email exists
// $1 is a placeholder for the username and the 's' checks the table
const checkUsernameExists = 'SELECT s FROM users s WHERE s.username = $1';
const checkEmailExists = 'SELECT s FROM users s WHERE s.email = $1';
// if the username or email is not found in the database, the user will be added
// $1, $2, $3, $4, $5, $6, $7 are placeholders for the values that will be added to the database, so username is $1, email is $2, password is $3, etc.
const addUser = 'INSERT INTO users (username, email, password, subscription_status, full_name, date_of_birth, district) VALUES ($1, $2, $3, $4, $5, $6, $7)';


const deleteUser = 'DELETE FROM users WHERE username = $1';


const updateUserEmail = 'UPDATE users SET email = $1 WHERE username = $2';


const bcryptUserPassword = 'UPDATE users SET password = $1 WHERE username = $2';

module.exports = {
    getUsers,
    getUserByUsername,
    getUserByUsers_id,
    checkUsernameExists,
    checkEmailExists,
    addUser,
    deleteUser,
    updateUserEmail,
    bcryptUserPassword,
};