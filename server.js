var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));


app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/*', function(req, res){
  res.redirect('/');
});
app.listen(3000);
