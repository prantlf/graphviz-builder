var { readFileSync } = require('fs');
var assert = require('assert');
var graphviz = require('../lib/graphviz');

// Create digraph G
var g = graphviz.digraph("G");

// Add node (ID: Hello)
var n1 = g.addNode( "Hello", {"color" : "blue", "shape" : "Mdiamond"} );
//n1.set( "color", "blue" );
n1.set( "style", "filled" );

// Add node (ID: World)
g.addNode( "World" );

// Add edge between the two nodes
g.addEdge(n1, "World")
  .set("color", "red")
  .set("label", "A label")
  .set("fontsize", "10");

var expected = readFileSync(__filename.replace(/js$/, 'dot'), 'utf-8')
assert.strictEqual(g.to_dot().trim(), expected.trim())
