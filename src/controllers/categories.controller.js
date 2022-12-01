const { categoriesService } = require('../services/index');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const newCategory = await categoriesService.createCategory(name);

    res.status(201).json(newCategory);
  } catch (err) {
    return res.status(500).json({ message: `Internal error: ${err}` });
  }
};

const getAllCategories = async (_req, res) => {
  try {
    const allCategories = await categoriesService.getAllCategories();

    res.status(200).json(allCategories);
  } catch (err) {
    return res.status(500).json({ message: `Internal error: ${err}` });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};
