const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  secret: process.env.JWT_SECRET,
  expiresIn: '1d',
  algorithm: 'HS256',
};