let express = require('express');
let router = express.Router();

var userModel = require('../models/user');

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