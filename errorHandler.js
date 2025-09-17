const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  const statusCode = 500;
  res.status(statusCode).json({
    error: {
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack
    }
  });
};

module.exports = errorHandler;
