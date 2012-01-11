var assert = require('assert');
var redblack = require('../redblack');

exports.loop = function(n, iterator) {
    for (var i = 0; i < n; i++) {
        iterator(i);
    }
};

exports.deleteRandom = function(n, tree) {
    var deleted = {};
    
    exports.loop(n, function(i) {
        deleted[i] = Math.round(Math.random()) === 1;
        if (deleted[i]) tree.delete(i);
    });
    
    return deleted;
};

exports.assertBalanced = function(tree) {
    // Root node should always be black
    assert.equal(tree.root.color, redblack.BLACK);
    
    // All nodes have a color
    (function assertHasColor(node) {
        if (node === null) return;
        assert.ok(node.color === redblack.RED || node.color === redblack.BLACK);
        assertHasColor(node.left);
        assertHasColor(node.right);
    })(tree.root);
    
    // The children of a red node are black
    (function assertChildColor(node) {
        if (node === null) return;
        if (node.color === redblack.RED) {
            if (node.left) assert.equal(node.left.color, redblack.BLACK);
            if (node.right) assert.equal(node.right.color, redblack.BLACK);
        }
        assertChildColor(node.left);
        assertChildColor(node.right);
    })(tree.root);
    
    // All paths to leaf should have the same number of black nodes
    (function check(node, total, path) {
        if (node === null) {
            if (path === -1) return total;
            assert.equal(total, path);
            return path;
        }
        
        if (node.color === redblack.BLACK) total++;
        
        path = check(node.left, total, path);
        path = check(node.right, total, path);
        
        return path;
    })(tree.root, 0, -1);
};