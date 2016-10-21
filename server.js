var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));



//make sure at end, catch all - serves index page even when on 'fake route'
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});
app.listen(3000);
