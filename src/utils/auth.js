const jwt = require('jsonwebtoken');
const configAuth = require('../config/auth');

const generetaToken = (payload) => {
  const token = jwt.sign(
    { ...payload }, configAuth.secret,
    { expiresIn: configAuth.expiresIn, algorithm: configAuth.algorithm },
  );
  return token;
};

const decode = (token) => jwt.verify(token, configAuth.secret);

module.exports = {
  generetaToken,
  decode,
};