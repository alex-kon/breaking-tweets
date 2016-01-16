var server = require('../server');
var request = require('supertest');
var app;

describe("main application", function () {

  before(function() {
    app = server(3000);
  });
  describe("routes", function () {
    it('/handle route should be available when the server is started', function (done) {
      request(app)
        .get('/handle')
        .expect(200)
        .end(function(err, res){
          if (err) throw err;
          done();
        });
    });
    it('/cnnbrk-tweets route should make a request to @cnnbrk handle', function (done) {
      request(app)
        .get('/cnnbrk-tweets')
        .expect(200)
        .end(function(err, res){
          if (err) throw err;
          done();
        });
    });
  });
  after(function(){
    app.close();
  });
});


