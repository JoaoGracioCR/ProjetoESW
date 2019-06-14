let express = require('express');
let router = express.Router();
let $ = express.Router();
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
			if (result) {
				if (result['_passWord'] === password) {
					console.log("Login")
				} else {
					res.redirect('/login.html');
				}
			} else {
				res.redirect('/login.html');
			}
			client.close();
		});
	});

});

router.get('/login', (req, res) => {
	res.redirect('/login.html');
});


//insert ocurr Method FORM LOGIN ocurrencias.
router.post('/ocurrencias', function (req, res) {

	var name = req.body.your_name;
	var number = req.body.your_number;
	var email = req.body.your_email;
	var type = req.body.your_type;
	var enquiry = req.body.your_enquiry;

	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect(err => {
		if (err) {
			res.sendStatus(500).send("error connecting to the database");
		}
		const collection = client.db("ESW").collection("ocorrencias");
		var obj = {idOcorrencia: Date.now(), nomeUser: name, numUser: number, emailUser: email, tipoOcorrencia: type, descricaoOcorrencia: enquiry };
		collection.insertOne(obj, function (err) {
			if (err){
				res.sendStatus(500).send("error");
			}else{
				console.log("1 document inserted");
				res.redirect('/');
			}

			
			client.close();
		});


	});
});

//get dados tabela ocurrência
router.get("/getAll", (req, res, next) => {
	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect(err => {
		const getCollection = client.db("ESW").collection("Ocorrencias");
		// perform actions on the collection object
		getCollection.find({}).toArray((err, result) => {
			if (err) {
				console.log(err);
				res.send(500);
				client.close();
			}
			else {
				res.send(result);
				client.close();
			}
		});
	});
});


//get dados tabela ocurrência	
router.get("/Docentes/getAll", function (req,res,next) {
	const client = new MongoClient(uri, { useNewUrlParser: true });
		client.connect(err => {
			const getCollection = client.db("ESW").collection("docentes");
			// perform actions on the collection object
			getCollection.find({}).toArray((err, result) => {
				if (err) {
					console.log(err);
					res.send(500);
					client.close();
				}
				else {
					 res.send(result);
					client.close();
				}
			});
		});
	});


//get dados tabela ocurrência	
router.get("/Ocorrencias/getAll", function (req,res,next) {
	const client = new MongoClient(uri, { useNewUrlParser: true });
		client.connect(err => {
			const getCollection = client.db("ESW").collection("ocorrencias");
			// perform actions on the collection object
			getCollection.find({}).toArray((err, result) => {
				if (err) {
					console.log(err);
					res.send(500);
					client.close();
				}
				else {
					 res.send(result);
					client.close();
				}
			});
		});
	});

module.exports = router;


//get dados tabela autorização	
router.get("/autorização/getAll", function (req,res,next) {
	const client = new MongoClient(uri, { useNewUrlParser: true });
		client.connect(err => {
			const getCollection = client.db("ESW").collection("autorizacao");
			// perform actions on the collection object
			getCollection.find({}).toArray((err, result) => {
				if (err) {
					console.log(err);
					res.send(500);
					client.close();
				}
				else {
					 res.send(result);
					client.close();
				}
			});
		});
	});

module.exports = router;



//get dados tabela relatório	
router.get("/relatorio/getAll", function (req,res,next) {
	const client = new MongoClient(uri, { useNewUrlParser: true });
		client.connect(err => {
			const getCollection = client.db("ESW").collection("relatorio");
			// perform actions on the collection object
			getCollection.find({}).toArray((err, result) => {
				if (err) {
					console.log(err);
					res.send(500);
					client.close();
				}
				else {
					 res.send(result);
					client.close();
				}
			});
		});
	});

module.exports = router;


//get dados tabela sala		
router.get("/Salas/getAll", function (req,res,next) {
	const client = new MongoClient(uri, { useNewUrlParser: true });
		client.connect(err => {
			const getCollection = client.db("ESW").collection("salas");
			// perform actions on the collection object
			getCollection.find({}).toArray((err, result) => {
				if (err) {
					console.log(err);
					res.send(500);
					client.close();
				}
				else {
					 res.send(result);
					client.close();
				}
			});
		});
	});

module.exports = router;

router.post("/recuperarPass", (req, res, next) => {
	console.log(req.body);

	var username = req.body.numeroAluno;
	var password = req.body.password;
	var repPassword = req.body.repPsw;

  
	if (password != repPassword) {
	  alert("Passwords não correspondem");
	} else {
	  const client = new MongoClient(uri, { useNewUrlParser: true });
	  client.connect(err => {
		const collection = client.db("ESW").collection("users");
		var query = { username: username };
		var values = { $set: { password: password } };
		collection.updateOne(query, values, function (err, result) {
		  if (err || !result) {
			alert("User não existe");
			console.log(result)
			console.log(err);
		  } else {
			res.redirect("index.html");
			console.log(result);
			client.close();
		  }
		})
		// client.close();
	  });
	}
  });
  
  module.exports = router;