const notFoundRoute = (req, res, next) => {
  res.status(404).json({
    msg: "Route not found",
  });
};

module.exports = notFoundRoute;
