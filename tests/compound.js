var { readFileSync } = require('fs');
var assert = require('assert');
var graphviz = require('../lib/graphviz');

// Create digraph G
var g = graphviz.digraph("G");
g.set( "splines", "compound");
g.from( "A" ).to( "B" ).to( "F" );
g.from( "A" ).to( "C" ).to( "D" ).to( "F" );
g.from( "A" ).to( "D" );
g.from( "A" ).to( "F" );
g.from( "C" ).to( "F" );
g.from( "E" ).to( "F" );

var expected = readFileSync(__filename.replace(/js$/, 'dot'), 'utf-8')
assert.strictEqual(g.to_dot().trim(), expected.trim())
