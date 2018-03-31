
const {MongoClient,ObjectID} = require('mongodb');
 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
      return console.log('Unable to connect to Mongodb Server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });
    //deleteOne

    // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    //     console.log(result);
    // });


    // db.collection('Useers').deleteMany({name:'Ankit'});

    db.collection('Useers').findOneAndDelete({_id: new ObjectID('5abe02f9201bf53588200f5f')
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });
    
    // db.close();

});