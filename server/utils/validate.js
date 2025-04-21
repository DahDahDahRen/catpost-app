const postSchema = require("../validation/postSchema");

const validate = (req, res, next) => {
  console.log(req.body);

  const { error } = postSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      statusCode: 400,
      isOkay: false,
    });
  }

  next();
};

module.exports = validate;
