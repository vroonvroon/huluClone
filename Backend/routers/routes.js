const express = require('express');
const router = express.Router();
const {SignUp, LogIn, User, getUser, UpdateUser, Delete, deleteUser, updateUser} = require('../controllers/controller');
const authMiddleware = require('../middlewares/auth-middleware');


router.route('/signup').post(SignUp);
router.route('/login').post(LogIn);
router.route('/getuser').get(authMiddleware, User);
router.route('/getuser/:id').get(getUser); // SINGLE USER //
router.route('/user/update/:id').patch(authMiddleware, UpdateUser);
router.route('/getuser/delete/:id').delete(authMiddleware, Delete);
router.route('/getuser/delete/:id').delete(authMiddleware, deleteUser);
router.route('/getuser/update/:id').patch(authMiddleware, updateUser);


module.exports = router;