redblack.js
===========

redblack.js is a red-black tree implementation for Node.js and the browser.

Usage
-----

    var tree = redblack.tree();
    
    tree.insert('foo', 'bar');
    tree.get('foo'); // -> 'bar'
    
    tree.delete('foo');
    tree.get('foo'); // -> null

Download
--------

Releases are available on [GitHub](https://github.com/scttnlsn/redblack.js/downloads)
or via [NPM](http://search.npmjs.org/#/redblack).

    npm install redblack

**Development:** [redblack.js](https://raw.github.com/scttnlsn/redblack.js/master/redblack.js)
**Production:**  [redblack.min.js](https://raw.github.com/scttnlsn/redblack.js/master/redblack.min.js)