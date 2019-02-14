// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log(err);
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   test: 'Something to do',
  //   completed: false,
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });

  db.collection('Users').insertOne({
    // _id: 123,
    name: 'Bob',
    age: 50,
    location: 'London',
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    // console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(result.ops);
    console.log(result.ops[0]._id.getTimestamp());
  });

  client.close();
});

// const user = {
//   name: 'Bob',
//   age: 50
// };
// const {name, age} = user;
// console.log(name);
// console.log(age);
