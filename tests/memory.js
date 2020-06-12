var readFileSync = require('fs').readFileSync;
var assert = require('assert');
var graphviz = require('../lib/graphviz');

// Create digraph G
var g = graphviz.digraph("G");

// Add node (ID: Hello)
var n1 = g.addNode( "Hello" );
n1.set( "color", "blue" )
  .set( "style", "filled" );

// Add node (ID: World)
g.addNode( "World" );

// Add edge between the two nodes
var e = g.addEdge( n1, "World" );
e.set( "color", "red" );

var expected = readFileSync(__filename.replace(/js$/, 'dot'), 'utf-8')
assert.strictEqual(g.to_dot().trim(), expected.trim())
