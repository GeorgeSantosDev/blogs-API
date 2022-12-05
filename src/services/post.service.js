const { Op } = require('sequelize');
const { BlogPost, User, Category, PostCategory } = require('../models');

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories' },
  ] });

  return allPosts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, { include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories' },
  ] });

  return post;
};

const createPost = async (...info) => {
  const [title, content, categoryIds, id] = info;
  const date = new Date();

  const post = await BlogPost
    .create({ title, content, userId: id, updated: date, published: date });

  const { id: postId } = post.dataValues;

  const promises = await categoryIds
    .map((categoryId) => PostCategory.create({ postId, categoryId }));

  const checkPostCategoryInsert = await Promise.all(promises);

  if (checkPostCategoryInsert) return post;
};

const editPost = async (...info) => {
  const [title, content, id] = info;
  const date = new Date();

  const editedPost = await BlogPost.update({ title, content, updated: date }, {
    where: {
      id,
    },
  });

  return { edited: editedPost[0], date };
};

const checkUserIdFromPost = async (postId, userId) => {
  const post = await BlogPost.findOne({ where: { userId, id: postId } });

  return post;
};

const deletePost = async (postId) => {
  const post = await BlogPost.destroy({ where: { id: postId } });

  return post;
};

const searchPost = async (search) => {
  const allPosts = await BlogPost
    .findAll({ where: { [Op.or]: [{ title: { [Op.like]: `%${search}%` } },
  { content: { [Op.like]: `%${search}%` } }] },
  include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories' },
  ] });

  return allPosts;
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  editPost,
  checkUserIdFromPost,
  deletePost,
  searchPost,
};
