let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var ocorrenciaModel = require('../models/ocorrencia');
mongoose.connect('mongodb+srv://projeto:projeto@clusteresw-idz8g.mongodb.net/ESW?retryWrites=true',{useNewUrlParser:true});

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

router.get('/editar/:id', (req, res) => {
   // res.send(req.params.id);
   let ocorrencia = {
       id: 10,
       nome: "rui",
       nestudante:100000000
   }
   res.render("editarOcorrencia",{
       ocorrencia:ocorrencia,
       user:{
           name:"Rui"
       }
   });
});

module.exports = router;
