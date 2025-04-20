class AppError extends Error {
  constructor(message, statuCode) {
    super(message);
    this.statuCode = statuCode;
  }
}

module.exports = AppError;
