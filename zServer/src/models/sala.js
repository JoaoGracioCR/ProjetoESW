var mongoose= require('mongoose');

var salaSchema = new mongoose.Schema({
	idSala:{type:Number, unique: true},
	numeroSala:{type: String},
	estabelecimento:{type: String},
	disponibilidade:{type: String},
	horario:{type: Boolean}
});

var Sala = mongoose.model('sala',salaSchema,'salas');

module.exports = Sala;