let express = require('express');
let router = express.Router();

var salaModel = require('../models/sala');

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
