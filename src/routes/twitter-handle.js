var twitterHandleController = require('../controllers/twitter-handle');

module.exports = function (app) {
    app.get('/:handle', function (request, response, next) {
        twitterHandleController.getTopTweets(request, response, next);
    });
};