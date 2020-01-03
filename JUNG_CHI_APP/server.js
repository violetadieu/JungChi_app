var express = require('express');
var app = express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));

var con = mysql.createConnection({
  host: 'happydaram2.cafe24.com',
  port: '3306',
  user: 'happydaram2',
  password: 'da215ram4654g!',
  database: 'happydaram2',
});

var server = app.listen(1348, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('start');
  console.warn('start');
});

con.connect(function(error) {
  if (error) console.log(error);
  else console.log('connected');
});

app.get('/member', function(req, res) {
  con.query('select * from member', function(error, rows, fields) {
    if (error) console.log(error);
    else {
      console.log(rows);
      res.send(rows);
    }
  });
});
