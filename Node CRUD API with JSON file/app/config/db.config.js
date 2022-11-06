const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "192.168.8.168",
  port: 3306,
  user: "root",
  password: "123456",
  database: "studentdb"
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;