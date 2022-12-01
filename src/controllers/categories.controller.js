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

module.exports = {
  createCategory,
};
