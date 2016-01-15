var express = require('express');
var routes = require('./routes/routes');
var config = require('config');

var app = express();

routes(app);

var port = config.get('CNNBrkTweets.port');

app.listen(port, function () {
  console.log(' app listening on port : ',port);
});