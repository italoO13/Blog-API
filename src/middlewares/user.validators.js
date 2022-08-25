const userSchema = require('../schemas/user.schema');
const CustomError = require('../utils/customError');

const create = async (req, res, next) => {
  try {
    const { error } = userSchema.user.validate(req.body);
    if (!error) {
      return next();
    }
    return next(new CustomError(400, error.message));
  } catch (e) {
    console.log(e);
    next(e);
  }
};

module.exports = {
  create,
};