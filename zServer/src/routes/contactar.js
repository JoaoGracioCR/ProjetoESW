let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var contactarModel = require('../models/contactar');
mongoose.connect('mongodb+srv://projeto:projeto@clusteresw-idz8g.mongodb.net/ESW?retryWrites=true', { useNewUrlParser: true });

//contactps
router.get('/', (req, res) => {
    contactarModel.find((err, contactar) => {
        if (err) {
            console.log(err);
            res.status(404).send();
        } else {
            res.status(200).send({ contactar });
        }
    });
});

module.exports = router;