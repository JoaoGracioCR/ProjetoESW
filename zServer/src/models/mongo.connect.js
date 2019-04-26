let mongoose = require('mongoose')

//informações da BD mongo
const server = `JO-C3-A3O'S ORG - 2019-04-26 `
const database = 'project 0'
const user = 'projeto'
const password = 'projeto'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)


//const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://projeto:<password>@clusteresw-idz8g.mongodb.net/test?retryWrites=true";
//const client = new MongoClient(uri, { useNewUrlParser: true });
//client.connect(err => {
 // const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
//}); 
