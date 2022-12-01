const { categoriesService } = require('../services/index');

module.exports = async (req, res, next) => {
  const { categoryIds } = req.body;

  const promises = await categoryIds.map((category) => categoriesService.getById(category));

  const checkCategories = await Promise.all(promises);

  if (!checkCategories) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};
