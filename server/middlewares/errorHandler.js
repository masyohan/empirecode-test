module.exports = (err, req, res, next) => {
  let status, message;
  switch (err.name) {
    case "WRONG_CREDENTIAL":
      status = 401;
      message = "Wrong credential !";
      break;
    case "DUPLICATE_EMAIL":
      status = 400;
      message = "Email already registered !";
      break;
    default:
      status = 500;
      message = "Internal server error.";
      break;
  }

  res.status(status).json({
    message,
  });
};
