const joi = require('joi');

const user = joi.object({
  displayName: joi.string().min(8).required()
    .error(new Error('"displayName" length must be at least 8 characters long')),
  email: joi.string().email().required()
    .error(new Error('"email" must be a valid email')),
  password: joi.string().min(6).required()
    .error(new Error('"password" length must be at least 6 characters long')),
  image: joi.string(),
});

module.exports = {
  user,
};