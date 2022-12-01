const validateLoginFields = require('./validateLoginFields');
const validateUser = require('./validateUser');
const validateDisplayName = require('./validateDisplayName');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const validateIfUserAlreadyRegistered = require('./validateIfUserAlreadyRegistered');
const validateCategoryName = require('./validateCategoryNameField');

module.exports = {
  validateLoginFields,
  validateUser,
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateIfUserAlreadyRegistered,
  validateCategoryName,
};
