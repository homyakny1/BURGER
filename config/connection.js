// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "mnwax9mxzow0k7hi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  user: "yg8hh5erl45y40w8	",
  password: "elxv172nzxn6n07z",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
