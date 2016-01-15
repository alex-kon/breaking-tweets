var express = require('express');
var routes = require('./routes/routes');
var routes = require('./routes/routes');


module.exports = function (port) {
    var app = express();

    app.listen(port, function () {
      console.log(' app listening on port : ',port);
    });

    routes(app);

    return app;
}
