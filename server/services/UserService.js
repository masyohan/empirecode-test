const UserModel = require("../models/User");
const { encrypt, compare } = require("../helpers/hash");
const { generateToken } = require("../helpers/jwt");

class UserService {
  static signup(user, callback) {
    const { fullname, email, password } = user;
    let hash = encrypt(password);
    UserModel.findByEmail(email, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (result.length) {
          callback({ name: "DUPLICATE_EMAIL" }, null);
        } else {
          UserModel.create(
            {
              email,
              password: hash,
              fullname,
            },
            (error, result) => {
              if (error) {
                callback(error, null);
              } else {
                let resp = {
                  status: 201,
                  data: { message: "Success created new user" },
                };
                callback(null, resp);
              }
            }
          );
        }
      }
    });
  }
  static login(user, callback) {
    const { email, password } = user;
    UserModel.findByEmail(email, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        if (!result.length || !compare(password, result[0].password)) {
          callback({ name: "WRONG_CREDENTIAL" }, null);
        } else {
          const { id } = result[0];
          const token = generateToken({ id });
          let resp = {
            status: 200,
            data: { token },
          };
          callback(null, resp);
        }
      }
    });
  }
}

module.exports = UserService;
