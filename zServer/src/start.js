let express = require('express');
let app = express();
let personRoute = require('./routes/person')

let index = require('../src/index');

app.use((req, res, next) =>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`)
    next()
})
app.use(personRoute);
app.use(express.static('public'));

//Handler para erros 
app.use((req, res, next) =>{
res.status(404).send('The page does not exist.');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server started on ${PORT}`));