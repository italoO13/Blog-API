const jwt = require('jsonwebtoken');
const configAuth = require('../config/auth');
const { User } = require('../database/models');
const CustomError = require('../utils/customError');

const createSession = async ({ email, password }) => {
  const response = await User.findOne({
    where: {
      email,
      password,
    },
  });
  if (!response) {
    throw new CustomError(400, 'Invalid fields');
  }

  const token = jwt.sign(
    { id: response.id, email }, configAuth.secret,
    { expiresIn: configAuth.expiresIn, algorithm: configAuth.algorithm },
  );

  return {
    token,
  };
};

module.exports = {
  createSession,
};