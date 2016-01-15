var requestService = require('../services/httpRequestService');

module.exports.getTopTweets = function (request, response, next) {
        response.send('ok');
//    requestService.getTweets(request, response, next).then(parseRequest);
 };

function parseRequest (data) {
    var processedData = processResponseData (data.body);
    data.response.setHeader('Content-Type', 'application/json');
    data.response.send(processedData);
}

function processResponseData (data) {
    return data;
}