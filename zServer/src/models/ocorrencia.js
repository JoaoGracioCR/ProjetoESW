var mongoose= require('mongoose');

var ocorrenciaSchema = new mongoose.Schema({
	idOcorrencia:{type:Number, unique: true},
    relatorioOcorrencia:{type: String},
    dataOcorrencia:{type: Date},
    utilizadorOcorrencia :{type: Number}
});

var Ocorrencia = mongoose.model('ocorrencia',ocorrenciaSchema);

module.exports = Ocorrencia;

