var mongoose= require('mongoose');

var salaSchema = new mongoose.Schema({
	idSala:{type:Number, unique: true},
	bloco:{type: String},
	numeroSala:{type: String},
	disponivel:{type: Boolean},
	horario:{type: String}
});

var Sala = mongoose.model('sala',salaSchema);

module.exports = Sala;