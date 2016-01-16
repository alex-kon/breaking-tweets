var requestService = require('../services/httpRequestService');


function parseRequest (data) {
    var processedData = processResponseData (data.body);
    data.response.render('tweets',{tweets : processedData});
}

function processResponseData (data) {
    var processedData= [];
    data.forEach( function(item) {
        processedData.push({
            "text" : item.text,
            "user" : {
                "profile_image_url" : item.user.profile_image_url
            },
            "link" : getLink(item.text)
        })
    });
    return processedData;
}

function getLink (content){
    var link = content.match(/(https:)(.*)|(http:)(.*)/);
    return link[0];
}

module.exports.getTopTweets = function (request, response, next, client) {
    requestService.getTweets(request, response, next, client).then(parseRequest);
 };

module.exports.getLink = getLink;
