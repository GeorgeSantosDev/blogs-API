const User = require('../models/User');

const getUserByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
  getUserByEmail,
};
