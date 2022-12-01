const validateLoginFields = require('./validateLoginFields');
const validateUser = require('./validateUser');
const validateDisplayName = require('./validateDisplayName');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const validateIfUserAlreadyRegistered = require('./validateIfUserAlreadyRegistered');
const validateCategoryName = require('./validateCategoryNameField');
const validateIfPostExist = require('./validadeIfBlogPostExist');

module.exports = {
  validateLoginFields,
  validateUser,
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateIfUserAlreadyRegistered,
  validateCategoryName,
  validateIfPostExist,
};
