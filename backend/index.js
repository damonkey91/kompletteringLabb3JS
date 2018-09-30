var express = require("express")
var app = express()
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
var db;

MongoClient.connect('mongodb://localhost:27017', function(error, client) {
  if (error) {
    console.error('Failed to connect to the database!');
    console.log(error);
  } else {
    console.log('Successfully connected to the database!');
    db = client.db('activities');
  }
});

app.get('/', function (request, response) {
  db.collection('TODO').find().toArray(function (error, result) {
    if (error) {
      response.status(500).send(error);
      return;
    }
    response.send(result);
  });
});

app.get('/one', function (request, response) {
  db.collection('TODO').find().toArray(function (error, result) {
    if (error) {
      response.status(500).send(error);
      return;
    }
    var index = Math.floor(Math.random() * result.length);
    var quote = result[index]
    response.send(quote);
  });
});

app.post('/', function (request, response) {
  db.collection('TODO').insertOne(request.body)
  response.send(request.body)
})

app.listen(3000, function () {
  console.log('The service is running!');
})
