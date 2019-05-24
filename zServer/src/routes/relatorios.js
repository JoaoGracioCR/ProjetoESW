let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var relatorioModel = require('../models/relatorio');
mongoose.connect('mongodb+srv://projeto:projeto@clusteresw-idz8g.mongodb.net/ESW?retryWrites=true',{useNewUrlParser:true});

// Listar relatorios
router.get('/', (req, res) => {
    relatorioModel.find((err, relatorios) => {
        if (err) {
            console.log(err);
            res.status(404).send();
        } else {
            res.status(200).send({relatorios});
        }
    });
});

module.exports = router;
