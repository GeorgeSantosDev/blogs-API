const { User } = require('../models');

const createUser = async (...infos) => {
  const [displayName, email, password, image] = infos;
  const user = await User.create({ displayName, email, password, image });

  return user;
};

const getUserByEmail = async (email) => User.findOne({ where: { email } });

const findAllUsers = async () => User.findAll({ attributes: { exclude: 'password' } });

const findUserById = async (id) => User.findByPk(id, { attributes: { exclude: 'password' } });

const deleteUser = async (id) => User.destroy({ where: { id } });

module.exports = {
  getUserByEmail,
  createUser,
  findAllUsers,
  findUserById,
  deleteUser,
};
