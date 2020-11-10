const AuthService = require("../services/AuthService");
const authentication = (req, res, next) => {
  const { token } = req.headers;
  AuthService.validate(token, (error, result) => {
    if (error) {
      next(error);
    } else {
      req.userData = result;
      next();
    }
  });
};

module.exports = {
  authentication,
};
