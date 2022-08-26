const categoriesSchema = require('../schemas/categories.schema');
const CustomError = require('../utils/customError');

const create = (req, res, next) => {
  const { error } = categoriesSchema.category.validate(req.body);

  if (!error) {
    return next();
  }
  next(new CustomError(400, error.message));
};

module.exports = {
  create,
};