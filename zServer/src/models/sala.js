var mongoose= require('mongoose');

var salaSchema = new mongoose.Schema({
	idSala:{type:Number, unique: true},
	numeroSala:{type: String},
	estabelecimento:{type: String},
	disponivel:{type: Boolean},
	horario:{type: Boolean}
});

var Sala = mongoose.model('sala',salaSchema);

module.exports = Sala;