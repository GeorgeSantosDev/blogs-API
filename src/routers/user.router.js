const express = require('express');
const { userController } = require('../controllers/index');
const { validateDisplayName,
  validateEmail,
  validatePassword,
  validateIfUserAlreadyRegistered } = require('../middlewares/index');

const router = express.Router();

router.post('/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateIfUserAlreadyRegistered,
  userController.createUser);

module.exports = router;
