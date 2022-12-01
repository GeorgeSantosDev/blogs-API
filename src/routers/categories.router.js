const express = require('express');
const { categoriesController } = require('../controllers/index');
const { verifyToken } = require('../auth/JWT');
const { validateCategoryName } = require('../middlewares/index');

const router = express.Router();

router.get('/', verifyToken, categoriesController.getAllCategories);
router.post('/', verifyToken, validateCategoryName, categoriesController.createCategory);

module.exports = router;