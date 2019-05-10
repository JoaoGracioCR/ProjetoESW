var mongoose= require('mongoose');

var salaSchema = new mongoose.Schema({
	idSala:{type:integer, unique: true},
	numeroSala:{type: String}
});

var Sala = mongoose.model('sala',salaSchema);

module.exports = Sala;