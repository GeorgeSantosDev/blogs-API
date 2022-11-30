const { User } = require('../models');

const getUserByEmail = async (email) => User.findOne({ email });

module.exports = {
  getUserByEmail,
};
