// Based off of Shawn Van Every's Live Web
// http://itp.nyu.edu/~sve204/liveweb_fall2013/week3.html
var Datastore = require('nedb')
db = new Datastore('database.db');
db.loadDatabase()
// Using express: http://expressjs.com/
var express = require('express');
// Create the app
var app = express();
var app = express();
app.use(express.json({limit : '1mb'}))
db.insert([{ a: 5 }, { a: 42 }], function (err, newDocs) {
  // Two documents were inserted in the database
  // newDocs is an array with these documents, augmented with their _id
});
// Set up the server
// process.env.PORT is related to deploying on heroku
var server = app.listen(process.env.PORT || 3000, listen);

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}
app.get('/allData',function (req,res){
  db.find({},(err,data) => {
    res.json(data)
  })
})
app.post('/postData',function (req,res) {
  console.log(req.body)
  db.insert([req.body], function (err, newDocs) {
    // Two documents were inserted in the database
    // newDocs is an array with these documents, augmented with their _id
  });
})



app.use(express.static('public'));






// WebSocket Portion
// WebSockets work with the HTTP ser
