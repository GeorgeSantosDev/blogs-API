const express = require('express');
const { postController } = require('../controllers/index');
const { verifyToken } = require('../auth/JWT');
const { validateIfPostExist,
  validatePostFields,
  validateCategoriesField,
  validateUserPermitionToChangePost,
  validateChangePostFields } = require('../middlewares/index');
 
const router = express.Router();

router.get('/', verifyToken, postController.getAllPosts);
router.get('/:id', verifyToken, validateIfPostExist, postController.getPostById);

router.post('/',
  verifyToken,
  validatePostFields,
  validateCategoriesField,
  postController.createPost);

router.put('/:id',
  verifyToken,
  validateUserPermitionToChangePost,
  validateChangePostFields,
  postController.editPost);

module.exports = router;
