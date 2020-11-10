module.exports = (err, req, res, next) => {
  let status, message;
  switch (err.name) {
  }

  res.status(status).json({
    message,
  });
};
