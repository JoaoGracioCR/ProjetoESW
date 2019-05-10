var express = require('express');
var router = express.Router();


var usersRouter = require('./routes/users');

const mongoose = require('mongoose');
const uri = "mongodb+srv://projeto:projeto@clusteresw-idz8g.mongodb.net/ESW?retryWrites=true";
mongoose.connect(uri, {useNewUrlParser: true});

var User = require('./models/user.js');

/*GET home page. */
router.get('/', function (req, res, next) {
	res.send('index');
});

router.use('/users', usersRouter);

//Login Method FORM LOGIN login.html
router.post('/login', function (req, res) {


	var username = req.body.numeroAluno;
	var password = req.body.password;

	User.findOne({
		username: username,
		password: password
	}, function (err, user) {
		if (err) {
			console.log(err);
			return res.status(500).send();
		}

		if (!user) {
			return res.status(404).send();
		}

		return res.status(200).send();
	})

});



module.exports = router;