let mongoose = require('mongoose')

//informações da BD mongo
const server = ''
const database = ''
const user = ''
const password = ''
//
mongoose.connect(`mongodb://${user}:${passowrd}@${server}/${database}`)
