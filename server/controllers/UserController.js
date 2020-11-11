const UserService = require("../services/UserService");
class UserController {
  static signup(req, res, next) {
    UserService.signup(req.body, (error, result) => {
      if (error) {
        next(error);
      } else {
        res.status(result.status).json({
          success: true,
          data: result.data,
        });
      }
    });
  }

  static login(req, res, next) {
    UserService.login(req.body, (error, result) => {
      if (error) {
        next(error);
      } else {
        res.status(result.status).json({
          success: true,
          data: result.data,
        });
      }
    });
  }

  static validate(req, res, next) {
    res.status(200).json({
      success: true,
      data: req.userData,
    });
  }
}

module.exports = UserController;
