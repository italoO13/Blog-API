const joi = require('joi');

const category = joi.object({
  name: joi.string().required()
    .error(new Error('"name" is required')),
});

module.exports = {
  category,
};