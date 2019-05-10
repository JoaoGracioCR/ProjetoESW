var express = require('express');
var router = express.Router();
var User = require('./routes/user.js');

/*GET home page. */
router.get('/', function(req,res,next){
	res.send('index');
});

router.post('/login',function(req,res){
	let body = req.body;
	const MongoClient = require('mongodb').MongoClient;
	const uri = "mongodb+srv://projeto:<projeto>@clusteresw-idz8g.mongodb.net/Projetc 0?retryWrites=true";
	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect(err => {
	//const collection = client.db("test").collection("devices");
	// perform actions on the collection object
	console.log("okokok");
	client.close();
	});

	var username= req.body.username;
	var password= req.body.password;
	
	User.findOne({username:username, password: password},function(err,user){
		if(err){
			console.log(err);
			return res.status(500).send();
		}
		
		if(!user){
			return res.status(404).send();
		}
		return res.status(200).send();
	})
});

router.post('/register',function(req,res){
	var username= req.body.username;
	var password = req.body.password;
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	
	var newUser = new User();
	
	newUser.username= username;
	newUser.password= password;
	newUser.firtsname=firstname;
	newUser.lastname=lastname;
	newUser.save(function(err, savedUser){
		if(err){
			console.log(err);
			return res.status(500).send();
		}
		
		return res.status(200).send();
	});

	
})

module.exports = router;