var requestModule = require('request');
var Promise = require('promise');
var config = require('config');


module.exports.getTweets = function (request, response, next, callback) {

    return new Promise(function (resolve, reject) {

        requestModule(url, function (error, httpResponse, body) {

            resolve({
                body : body,
                response : response
            });

        });
    });

};