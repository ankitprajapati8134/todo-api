// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
      return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5abdff88118598195c80143b')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs ,undefined, 2));
        
    // }, (err) => {
    //     console.log('Unable to fetch Todos');
    // });

    // db.collection('Todos').find({}).count().then((count) => {
    //     console.log(`Todos count: ${count}`);
        
    // }, (err) => {
    //     console.log('Unable to fetch Todos');
    // });


    db.collection('Useers').find({name:'Ankit'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });


    // db.close();

});