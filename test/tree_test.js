var assert = require('assert');
var helpers = require('./helpers');
var redblack = require('../redblack.js');

describe('Tree', function() {
    var n = 10000;
    var tree;
    
    beforeEach(function() {
        tree = redblack.tree();
        helpers.loop(n, function(i) {
            tree.insert(i, i);
        });
    });
    
    it('maps key/value pairs', function() {
        helpers.loop(n, function(i) {
            assert.equal(tree.get(i), i);
        });
    });
    
    it('deletes key/value pairs', function() {
        var deleted = helpers.deleteRandom(n, tree);
        
        helpers.loop(n, function(i) {
            assert.equal(tree.get(i), deleted[i] ? null : i);
        });
    });
    
    it('remains balanced', function() {
        helpers.assertBalanced(tree);
        helpers.deleteRandom(n, tree);
        helpers.assertBalanced(tree);
    });
});