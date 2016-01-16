var expect = require('chai').expect;
var controller = require('../controllers/twitter-handle');

var data = "This an article that contains a link at the end http://this.is.a.fakeurl/test/";

describe("main application", function () {
    describe("twitter handle controller getLink function", function () {
        it('should extract the url form a tweet', function () {
            var result = controller.getLink(data);
            var expectedResult = 'http://this.is.a.fakeurl/test/';
            expect(result).to.deep.equal(expectedResult);
        });
    });
});


