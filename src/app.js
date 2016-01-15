var config = require('config');
var app = require('./server')(config.get('CNNBrkTweets.port'));
