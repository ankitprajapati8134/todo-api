// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'ankit', age: 24}
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
      return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => { 
    //     if(err){
    //         return console.log('Unable to insert Todo',err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
// Insert new doc into Users(name, age, location)

    // db.collection('Useers').insertOne({
    //     name: 'Ankit',
    //     age: 22,
    //     location: 'India'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to Insert a User', err);
    //     }
    //     console.log(result.ops);        
    //     // console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();

});