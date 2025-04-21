const AppError = require("../utils/AppError");

const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statuCode).json({
      msg: err.message,
      statusCode: err.statuCode,
      isOkay: false,
    });
  }

  res.status(500).json(err);
};

module.exports = errorHandler;
