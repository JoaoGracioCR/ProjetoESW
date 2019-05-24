let express = require('express');
let router = express.Router();
let User = require('../models/user');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://projeto:projeto@clusteresw-idz8g.mongodb.net/test?retryWrites=true";
router.get('/', (req, res, next) => {
	res.send('index');
})
//Login Method FORM LOGIN login.html
router.post('/login', function (req, res) {

	var username = req.body.numeroAluno;
	var password = req.body.password;

	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect(err => {
		if (err) {
			res.sendStatus(500).send("error connecting to the database");
		}
		const collection = client.db("ESW").collection("users");
		// perform actions on the collection object
		collection.findOne({ _userName: username }, (err, result) => {
			if (err) throw err;
			if(result){
				if(result['_passWord']===password){
					console.log("Login")
				}else{
					res.redirect('/login.html');
				}
			}else{
				res.redirect('/login.html');
			}
			client.close();
		});
	});

});

router.get('/login',(req,res)=>{
	res.redirect('/login.html');
});

module.exports = router;