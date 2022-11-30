const express = require('express');
const { loginController } = require('../controllers/index');
const { validateLoginFields, validateUser } = require('../middlewares/index');

const router = express.Router();

router.post('/', validateLoginFields, validateUser, loginController);

module.exports = router;