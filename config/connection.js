//housing all mysql connection data

var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'Jmota05!',
	database: 'burgers_db'
})

// Make connection.
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;