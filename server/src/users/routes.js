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
router.get('/users_id/:users_id', controller.getUserByUsers_id);

// the POST request functions from the controller file
router.post("/", controller.addUser);

// the PUT request functions from the controller file
router.put("/:username/updateEmail", controller.updateUserEmail);
router.put("/:users_id/updateUsername", controller.updateUserUsername);


// the DELETE request functions from the controller file
router.delete("/:username", controller.deleteUser);

// export the router
module.exports = router;