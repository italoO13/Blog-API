const joi = require('joi');

const createSession = joi.object({
 email: joi.string().email().required().error(new Error('Some required fields are missing')),
 password: joi.string().required().error(new Error('Some required fields are missing')),
});

module.exports = {
  createSession,
};