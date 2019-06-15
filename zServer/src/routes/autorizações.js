let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var autorizacaoModel = require('../models/autorização');
mongoose.connect('mongodb+srv://projeto:projeto@clusteresw-idz8g.mongodb.net/ESW?retryWrites=true',{useNewUrlParser:true});

// Listar autorização
router.get('/', (req, res) => {
    autorizacaoModel.find((err, autorizacao) => {
        if (err) {
            console.log(err);
            res.status(404).send();
        } else {
            res.status(200).send({autorizacao});
        }
    });
});

module.exports = router;
