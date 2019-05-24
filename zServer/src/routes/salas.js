let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var salaModel = require('../models/sala');
mongoose.connect('mongodb+srv://projeto:projeto@clusteresw-idz8g.mongodb.net/ESW?retryWrites=true',{useNewUrlParser:true});

// Listar salas
router.get('/', (req, res) => {
    salaModel.find((err, salas) => {
        if (err) {
            console.log(err);
            res.status(404).send();
        } else {
            res.status(200).send({salas});
        }
    });
});

module.exports = router;
