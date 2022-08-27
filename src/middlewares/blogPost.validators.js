const blogPostSchema = require('../schemas/blogPost.schema');
const CustomError = require('../utils/customError');

const createPost = (req, res, next) => {
  const { error } = blogPostSchema.post.validate(req.body);
  if (error) {
    return next(new CustomError(400, error.message));
  } 
  return next();
};

const editPost = (req, res, next) => {
  const { error } = blogPostSchema.editPost.validate(req.body);
  if (error) {
    return next(new CustomError(400, error.message));
  } 
  return next();
};

module.exports = {
  createPost,
  editPost,
};