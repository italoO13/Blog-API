const CustomError = require('../utils/customError');
const authUtils = require('../utils/auth');

const authenticated = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    next(new CustomError(401, 'Token not found'));
  }
  try {
    const decode = authUtils.decode(authorization);
    req.user = { id: decode.id, email: decode.email };
    next();
  } catch (error) {
    console.log(error);
    next(new CustomError(401, 'Expired or invalid token'));
  }
};

module.exports = {
  authenticated,
};