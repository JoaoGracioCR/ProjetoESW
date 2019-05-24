let express = require('express');
let router = express.Router();

var ocorrenciaModel = require('../models/ocorrencia');

// Listar ocorrencias
router.get('/', (req, res) => {
    ocorrenciaModel.find((err, ocorrencias) => {
        if (err) {
            console.log(err);
            res.status(404).send();
        } else {
            res.status(200).send({ocorrencias});
        }
    });
});

module.exports = router;
