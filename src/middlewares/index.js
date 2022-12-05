const validateLoginFields = require('./validateLoginFields');
const validateUser = require('./validateUser');
const validateDisplayName = require('./validateDisplayName');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const validateIfUserAlreadyRegistered = require('./validateIfUserAlreadyRegistered');
const validateCategoryName = require('./validateCategoryNameField');
const validateIfPostExist = require('./validadeIfBlogPostExist');
const validatePostFields = require('./validateCreatePostFields');
const validateCategoriesField = require('./validateCategoriesField');
const validateUserPermitionToChangePost = require('./validateUserPermitionToChangePost');
const validateChangePostFields = require('./validateChangePostFields');
const validateIfBlogPostExist = require('./validateIfBlogPostExist');
const validateIfUserHaveAuthToDeletePost = require('./validateIfUserHaveAuthorizationToDeletePost');

module.exports = {
  validateLoginFields,
  validateUser,
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateIfUserAlreadyRegistered,
  validateCategoryName,
  validateIfPostExist,
  validatePostFields,
  validateCategoriesField,
  validateUserPermitionToChangePost,
  validateChangePostFields,
  validateIfBlogPostExist,
  validateIfUserHaveAuthToDeletePost,
};
