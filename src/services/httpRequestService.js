var requestModule = require('request');
var Promise = require('promise');
var config = require('config');

var numOfTweets = config.get("TwitterApi.NumberOfTweets");

module.exports.getTweets = function (request, response, next, client, callback) {

    return new Promise(function (resolve, reject) {
        client.get('statuses/user_timeline.json?screen_name='+request.params.handle+
                    '&count='+numOfTweets,function(error, tweets, httPresponse) {
            if (error) {
                reject(error);
            }
            resolve({
                body : tweets,
                response : response
            });
        });

    });

};