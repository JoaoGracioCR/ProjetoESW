var mongoose= require('mongoose');

var contactarSchema = new mongoose.Schema({
	idcontactar:{type:Number, unique: true},
    nomeUser:{type: String},
    numUser:{type: Number},
    emailUser :{type: String},
    descricaoContactar:{type: String} 
});


var Contactar = mongoose.model('contactar',contactarSchema);

module.exports = Contactar;

