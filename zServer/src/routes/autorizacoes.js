var mongoose= require('mongoose');

var autorizacaoSchema = new mongoose.Schema({
	idAutorizacoes:{type:integer, unique: true},
    tituloAutorizacoes:{type: String},
    tipoAutorizacoes:{type: String},
    descricaoAutorizacoes :{type: String}
});

var Autorizacao = mongoose.model('autorizacoes',autorizacaoSchema);

module.exports = Autorizacao;