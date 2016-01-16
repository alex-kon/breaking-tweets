var viewEngine = require('./view-engine');
var staticAssets = require('./static-assets');

module.exports = function (app) {
    viewEngine(app);
    staticAssets(app);
}