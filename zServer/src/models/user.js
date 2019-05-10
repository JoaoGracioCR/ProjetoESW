var mongoose= require('mongoose');

var userSchema = new mongoose.Schema({
	username:{type: String, unique: true},
	password:{type: String},
	firstname: String,
	lastname: String
});

var User = mongoose.model('utilizador',userSchema, 'utilizador');

module.exports = User;