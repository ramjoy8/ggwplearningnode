var express = require('express');
//var mangoose =require('mongoose');
//const MongoClient = require('mongodb').MongoClient;
var bodyparser=require('body-parser');
var cors=require('cors');
var path=require('path');

var app=express();
const route = require('./route')
app.use(cors())
app.use(bodyparser.urlencoded({
    extended: true
  }));
app.use('/api',route)

// mangoose.connect('mongodb://localhost:27017/cc');
// mangoose.connection.on('connected',()=>{
// console.log('Connected to db')

// })


const uri = "mongodb+srv://Ram:ramjoy888.@learning-gng6z.mongodb.net/test?retryWrites=true";
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://Ram:12345@learning-gng6z.mongodb.net/test?retryWrites=true'
const mongoDB = dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// var MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb+srv://Ram:12345@learning-gng6z.mongodb.net/test?retryWrites=true', function (err, client) {
//   if (err) throw err
//   else console.log('Conne')

  
//     console.log(err)
//   })

var port = process.env.PORT || 5000;

app.listen (port,function(err){

console.log('running on '+port);
});



