var mongoose= require('mongoose');

var docenteSchema = new mongoose.Schema({
	IdDocente:{type:Number, unique: true},
    nomeDocente:{type: String},
    gabineteDocente:{type: String},
    horarioDocente :{type: String}
});

var docente = mongoose.model('docentes',docenteSchema);

module.exports = docente;