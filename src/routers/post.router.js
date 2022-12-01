const express = require('express');
const { postController } = require('../controllers/index');
const { verifyToken } = require('../auth/JWT');
const { validateIfPostExist } = require('../middlewares/index');
 
const router = express.Router();

router.get('/', verifyToken, postController.getAllPosts);
router.get('/:id', verifyToken, validateIfPostExist, postController.getPostById);

module.exports = router;
