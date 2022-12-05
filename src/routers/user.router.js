const express = require('express');
const { userController } = require('../controllers/index');
const { verifyToken } = require('../auth/JWT');
const { validateDisplayName,
  validateEmail,
  validatePassword,
  validateIfUserAlreadyRegistered } = require('../middlewares/index');

const router = express.Router();

router.get('/', verifyToken, userController.findAllUsers);
router.get('/:id', verifyToken, userController.findUserById);

router.post('/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateIfUserAlreadyRegistered,
  userController.createUser);

router.delete('/me',
  verifyToken,
  userController.deleteUser);

module.exports = router;
