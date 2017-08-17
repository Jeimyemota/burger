var orm = require('../config/orm.js');

var burger = {
//	calling orm.all we are inserting burgers as our table input. then we are running our function response as a call back which will be sent to our routes.js file  
	all: function(cb){
		orm.all('burgers', function(res){
			cb(res);
		})
	}, 
	update: function(id,cb){
		orm.update('burgers',id,cb);
	}
}

module.exports = burger;