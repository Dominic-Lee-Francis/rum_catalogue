/* The user routes will be stored here


*/

// use the express router in our project
const { Router } = require('express');
// import all the controller functions into our routes file
const controller = require('./controller');

// create a Router object
const router = Router();

// the GET request functions from the controller file
router.get('/', controller.getUsers);
router.get('/:username', controller.getUserByUsername);

// the POST request functions from the controller file
router.post("/", controller.addUser);

// export the router
module.exports = router;