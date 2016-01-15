var requestService = require('../services/httpRequestService');

module.exports.getTopTweets = function (request, response, next, client) {
    requestService.getTweets(request, response, next, client).then(parseRequest);
 };

function parseRequest (data) {
    console.log('get');
    var processedData = processResponseData (data.body);
    data.response.render('tweets',{tweets : processedData});
}

function processResponseData (data) {
    return data;
}