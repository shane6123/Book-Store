const router = require('express').Router();
const userController = require('../controllers/userController');

router.route('/users').get(userController.getAllUsers).post(userController.addUser);
router.route('/user/:id').get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);

module.exports = router;