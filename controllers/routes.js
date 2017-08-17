var express = require('express')
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function(req,res){
//	this is passing burger_data into our function
	burger.all(function(burger_data){
		console.log(burger_data);
		res.render('index', {burger_data});
	})
})

router.put('/burgers/update',function(req,res){
	burger.update(req.body.burger_id, function(result){
		console.log(result);
		res.redirect('/');
	});
});
//export the routes so the server.js can read it
module.exports = router;