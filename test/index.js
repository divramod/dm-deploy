var should = require('chai').should();
var npmName = require('../index');
var createTag = npmName.createTag;
require("shelljs/global");

describe('dm-npm ', function() {
    it('index.js should be existent', function() {
        createTag().should.equal("test");
    });
});
