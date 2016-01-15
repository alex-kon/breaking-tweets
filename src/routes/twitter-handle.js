var twitterHandleController = require('../controllers/twitter-handle');
var Twitter = require('twitter');
var config = require('config');

var client = new Twitter({
  consumer_key: config.get("TwitterApi.ConsumerKey"),
  consumer_secret: config.get("TwitterApi.ConsumerSecret"),
  access_token_key: config.get("TwitterApi.AccessToken"),
  access_token_secret: config.get("TwitterApi.AccessTokenSecret")
});

module.exports = function (app) {
    app.get('/:handle', function (request, response, next) {
        twitterHandleController.getTopTweets(request, response, next, client);
    });
};