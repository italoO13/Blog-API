const { User } = require('../database/models');
const { generetaToken } = require('../utils/auth');
const CustomError = require('../utils/customError');

const create = async ({ displayName, email, password, image }) => {
  const user = await User.findAll({
    where: { email },
  });

  if (user.length) {
    throw new CustomError(409, 'User already registered');
  }
  await User.create({ displayName, email, password, image });
  const token = generetaToken({ displayName, email, password, image });
  return { token };
};

const getAll = async () => {
  const users = await User.findAll(
    { attributes: { exclude: ['password'] } },
  );
  return users;
};

module.exports = {
  create,
  getAll,
};