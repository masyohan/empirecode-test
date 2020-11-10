const UserModel = require("../models/User");
const { verifyToken } = require("../helpers/jwt");

class AuthService {
  static validate(token, callback) {
    const { id } = verifyToken(token);
    UserModel.findById(id, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.length) {
          delete result[0].password;
          callback(null, result[0]);
        } else {
          callback({ name: "WRONG_CREDENTIAL" }, null);
        }
      }
    });
  }
}

module.exports = AuthService;
