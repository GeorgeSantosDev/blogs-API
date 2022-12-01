const express = require('express');
const { postController } = require('../controllers/index');
const { verifyToken } = require('../auth/JWT');
 
const router = express.Router();

router.get('/', verifyToken, postController.getAllPosts);

module.exports = router;
