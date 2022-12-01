const { Category } = require('../models');

const createCategory = async (name) => Category.create({ name });
const getAllCategories = async () => Category.findAll();
const getById = async (id) => Category.findByPk(id);

module.exports = {
  createCategory,
  getAllCategories,
  getById,
};