// Import MySQL connection.
var connection = require("./connection.js");

//creating connection thats selecting everything within the table then we are creating a callback that will pass result into the models folder. 
var orm = {
	all: function(tableInput, cb){
		connection.query('SELECT * FROM '+tableInput+';', function(err,result){
			if(err) throw err;
			cb(result)
		})
	},
	
	 update: function(tableInput, condition, cb) {
    	connection.query('UPDATE '+tableInput+ ' SET devoured=true WHERE id='+condition+';', function(err, result) {
      if (err) throw err;
      cb(result);
    })
  }
}
module.exports = orm;