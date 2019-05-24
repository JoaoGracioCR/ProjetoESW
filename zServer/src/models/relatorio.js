var mongoose= require('mongoose');

var relatorioSchema = new mongoose.Schema({
	idRelatorio:{type:Number, unique: true},
    tipoRelatorio:{type: String},
    mensagemRelatorio:{type: String},
    dataRelatorio :{type: Date},
    utilizadorRelatorio:{type:String}
});

var Relatorio = mongoose.model('relatorio', relatorioSchema);

module.exports = Relatorio;