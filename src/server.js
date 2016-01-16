var express = require('express');
var routes = require('./routes/routes');
var routes = require('./routes/routes');
var middleware = require('./middleware/middleware')

module.exports = function (port) {
    var app = express();

    middleware(app);

    var expressApp = app.listen(port, function () {
      console.log(' app listening on port : ',port);
    });

    routes(app);

    return expressApp;
}

