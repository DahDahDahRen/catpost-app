const Joi = require("joi");

const postSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
});

module.exports = postSchema;
