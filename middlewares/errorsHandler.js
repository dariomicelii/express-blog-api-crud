function errorsHandler(err, req, res, next) {
  res.status(500);
  res.json({
    status: "KO",
    error: err.message,
  });
}

module.exports = errorsHandler;
