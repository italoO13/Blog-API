const jwt = require('jsonwebtoken');
const configAuth = require('../config/auth');

const generetaToken = (payload) => {
  const token = jwt.sign(
    { ...payload }, configAuth.secret,
    { expiresIn: configAuth.expiresIn, algorithm: configAuth.algorithm },
  );
  return token;
};

module.exports = {
  generetaToken,
};