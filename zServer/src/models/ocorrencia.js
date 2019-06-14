var mongoose= require('mongoose');

var ocorrenciaSchema = new mongoose.Schema({
	idOcorrencia:{type:Number, unique: true},
    nomeUser:{type: String},
    numUser:{type: Number},
    emailUser :{type: String},
    tipoOcorrencia:{type: String}, 
    descricaoOcorrencia:{type: String} 
});

var Ocorrencia = mongoose.model('ocorrencia',ocorrenciaSchema);

module.exports = Ocorrencia;

