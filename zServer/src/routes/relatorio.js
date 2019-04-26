var mongoose= require('mongoose');

var relatorioSchema = new mongoose.Schema({
	idRelatorio:{type:integer, unique: true},
    tipoRelatorio:{type: String},
    mensagemRelatorio:{type: String},
    dataRelatorio :{type: Date},
    utilizadorRelatorio:{type:String}
});

var Relatorio = mongoose.model('sala',relatorioSchema);

module.exports = Relatorio;