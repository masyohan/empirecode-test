const sql = require("../config/mysql");

const query = `
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    fullname VARCHAR(255) NOT NULL
)
`;

sql.query(query, (err, result) => {
  if (err) throw err;
  console.log("Successfully created table Users");
});
