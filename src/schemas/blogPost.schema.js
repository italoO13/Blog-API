const joi = require('joi');

const post = joi.object({
  title: joi.string().required()
    .error(new Error('Some required fields are missing')),
  content: joi.string().required()
    .error(new Error('Some required fields are missing')),
  categoryIds: joi.array().min(1).required()
    .error(new Error('"categoryIds" not found')),
});

const editPost = joi.object({
  title: joi.string().min(1).required()
    .error(new Error('Some required fields are missing')),
  content: joi.string().min(1).required()
    .error(new Error('Some required fields are missing')),
});

module.exports = {
  post,
  editPost,
};