var mongoose= require('mongoose');

var ocorrenciaSchema = new mongoose.Schema({
	idOcorrencia:{type:integer, unique: true},
    relatorioOcorrencia:{type: String},
    dataOcorrencia:{type: Date},
    utilizadorOcorrencia :{type: Integer}
});

var Ocorrencia = mongoose.model('ocorrencia',ocorrenciaSchema);

module.exports = Ocorrencia;