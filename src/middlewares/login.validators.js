const loginSchema = require('../schemas/login.schema');
const CustomError = require('../utils/customError');

const createSession = (req, res, next) => {
  const { error } = loginSchema.createSession.validate(req.body);
  if (!error) {
    return next();
  }
  next(new CustomError(400, error.message));
};

module.exports = {
  createSession,
};