const { User } = require('../database/models');
const { generetaToken } = require('../utils/auth');
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
  const token = generetaToken({ id: response.id, email });

  return {
    token,
  };
};

module.exports = {
  createSession,
};