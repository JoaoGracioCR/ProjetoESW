let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var userModel = require('../models/user');
mongoose.connect('mongodb+srv://projeto:projeto@clusteresw-idz8g.mongodb.net/test?retryWrites=true',{useNewUrlParser:true});

// Listar utilizadores
router.get('/', (req, res) => {
    userModel.find((err, users) => {
        if (err) {
            console.log(err);
            res.status(404).send();
        } else {
            res.status(200).send({users});
        }
    });
});

// Criar utilizador
/* router.post('/', (req, res) => {
    var user = new userModel(req.body);

    user.save();
});
 */

module.exports = router;