const sql = require("../config/mysql");
const table_name = "Users";
class User {
  static create(user, callback) {
    sql.query(`INSERT INTO ${table_name} SET ?`, user, (error, res) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, res);
      }
    });
  }
  static findByEmail(email, callback) {
    sql.query(
      `SELECT * FROM ${table_name} where email = '${email}'`,
      (error, res) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, res);
        }
      }
    );
  }
  static findById(id, callback) {
    sql.query(`SELECT * FROM ${table_name} where id = ${id}`, (error, res) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, res);
      }
    });
  }
}

module.exports = User;
