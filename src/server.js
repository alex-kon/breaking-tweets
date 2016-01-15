var express = require('express');
var routes = require('./routes/routes');
var routes = require('./routes/routes');
var exphbs  = require('express-handlebars');


module.exports = function (port) {
    var app = express();

    app.engine('handlebars', exphbs({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    app.use(express.static('assets'));

    app.listen(port, function () {
      console.log(' app listening on port : ',port);
    });

    routes(app);

    return app;
}
