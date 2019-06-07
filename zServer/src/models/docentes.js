var mongoose= require('mongoose');

var docenteSchema = new mongoose.Schema({
	IdDocente:{type:Number, unique: true},
    nomeDocente:{type: String},
    GabineteDocente:{type: String},
    HorarioDocente :{type: String}
});

var docente = mongoose.model('docentes',autorizacaoSchema);

module.exports = docente;