const { User } = require('../models');

const createUser = async (...infos) => {
  const [displayName, email, password, image] = infos;
  console.log(infos);
  const user = await User.create({ displayName, email, password, image });

  return user;
};

const getUserByEmail = async (email) => User.findOne({ where: { email } });

const findAllUsers = async () => User.findAll({ attributes: { exclude: 'password' } });

module.exports = {
  getUserByEmail,
  createUser,
  findAllUsers,
};
