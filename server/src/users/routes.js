/* The user routes will be stored here


*/

// use the express router in our project
const { Router } = require('express');
// import all the controller functions into our routes file
const controller = require('./controller');

// create a Router object
const router = Router();

// this clarifies the getUsers function from the controller file
router.get('/', controller.getUsers);

// export the router
module.exports = router;