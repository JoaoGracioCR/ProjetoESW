var mongoose= require('mongoose');

var ocorrenciaSchema = new mongoose.Schema({
	idOcorrencia:{type:Number, unique: true},
    tipoOcorrencia:{type: String},
    dataOcorrencia:{type: Date},
    utilizadorOcorrencia :{type: Number},
    relatorioOcorrencia:{type: String}   
});

var Ocorrencia = mongoose.model('ocorrencia',ocorrenciaSchema);

module.exports = Ocorrencia;

