
let express = require('express');
let router = express.Router();
let $ = express.Router();
let User = require('../models/user');
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://projeto:projeto@clusteresw-idz8g.mongodb.net/test?retryWrites=true";

//Login Method FORM LOGIN login.html
/*router.post('/login', function (req, res) {

	var username = req.body.numeroAluno;
	var password = req.body.password;

if(username === "" || password === ""){
 console.log('Username and Password must be filled');
 res.redirect('/login.html');
}else{
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
					console.log("Login");
					res.redirect('/login.html');
				} else {
					console.log("Password is incorrect");
					res.redirect('/login.html');
				}
			} else {
				res.redirect('/login.html');
			}
			client.close();
		});
	});
}
});*/


// Login
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
  });
  
  router.post("/login", (req, res, next) => {
	console.log(req.body.numeroAluno)
	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect(err => {
	  var numAluno = req.body.userName;
	  var password =  req.body.passWord;
	  console.log(req);
	  const collection = client.db("ESW").collection("users");
	  // perform actions on the collection object
	  collection.findOne({'userName':numAluno, 'passWord':password},(err, res2) => {
		if(err){
		  res.json({"Message":"SystemError"});
		  console.log("1");
		}else{
		  console.log("2"); 
		  console.log(res2);
		  console.log(password);
			console.log("2.1"); 
			console.log(res2);
			res.status(200).json({
				"Message": "Success",
				"userName": res2.userName,
				"passWord": res2.passWord,      			
			});
			}
			  });
		  });   
		});

  module.exports = router;
  
//getcookie

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
	  var c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }



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

router.post('/Ocorrencias/apagar', function (req, res) {
	var all = req.body;
	var id = all.idOcorrencia;

	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect(err => {
		if (err) {
			res.sendStatus(500).send("error connecting to the database");
		}
		const collection = client.db("ESW").collection("ocorrencias");

		     collection.deleteOne({ "idOcorrencia" : id }, function (err, results){
				if (err){
					res.sendStatus(500).send("error");
				}else{
					console.log("1 document deleted");
					res.redirect('/');
				}
			 });

			client.close();
		});

	

});

//edit ocurr Method ocurrencias.
router.post('/editarOcurrencias', function (req, res) {

	var id = req.body.idUser;
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

		     collection.updateOne( 
			 { "idOcorrencia" : id }, 
			 { $set: {"nomeUser" : name, "numUser" : number, "emailUser" : email, "tipoOcorrencia" : type, "descricaoOcorrencia" : enquiry } },
			 { upsert: true } );

			 if (err){
				res.sendStatus(500).send("error");
			}else{
				console.log("1 document updated");
				res.redirect('/');
			}

			client.close();
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

	var username = req.body.nomeAluno;
	var password = req.body.password;
	var repPassword = req.body.repPsw;

  
	if (password != repPassword) {
	  console.log("Passwords do not match");
	  res.redirect('/forgotPassword.html')

	} else {
	  const client = new MongoClient(uri, { useNewUrlParser: true });
	  client.connect(err => {
		const collection = client.db("ESW").collection("users");
		collection.updateOne( 
			{ "_userName" : username }, 
			{ $set: {"_userName" : username, "_passWord" : repPassword} },
			{ upsert: true } );
			if (err){
				res.sendStatus(500).send("error");
			}else{
				console.log("1 document updated");
				res.redirect('/');
			}

			client.close();
	  });
	}
  });
  
  module.exports = router;

  //insere registos do form contactar .
router.post('/contactar', function (req, res) {

	var name = req.body.your_name;
	var number = req.body.your_number;
	var email = req.body.your_email;
	var enquiry = req.body.your_enquiry;

	const client = new MongoClient(uri, { useNewUrlParser: true });
	client.connect(err => {
		if (err) {
			res.sendStatus(500).send("error connecting to the database");
		}
		const collection = client.db("ESW").collection("contactar");
		var obj = {idContactar: Date.now(), nomeUser: name, numUser: number, emailUser: email, descricaoContactar: enquiry };
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