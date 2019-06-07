let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var docenteModel = require('../models/docentes');
mongoose.connect('mongodb+srv://projeto:projeto@clusteresw-idz8g.mongodb.net/ESW?retryWrites=true',{useNewUrlParser:true});

// Listar docentes
router.get('/', (req, res) => {
    docenteModel.find((err, docente) => {
        if (err) {
            console.log(err);
            res.status(404).send();
        } else {
            res.status(200).send({docente});
        }
    });
});

module.exports = router;