// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log(err);
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  // db.collection('Todos').find({
  //   _id: new ObjectID('5c654eb291d8ca358abec25f')
  // }).toArray().then((docs) => {
  //   console.log(docs);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').count({completed: true}).then((count) => {
  //   console.log(`Todos completed count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find().toArray().then((docs) => {
    console.log(docs);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // db.collection('Users').count().then((count) => {
  //   console.log(`Users completed count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  client.close();
});
