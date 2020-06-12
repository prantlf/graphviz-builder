var readFileSync = require('fs').readFileSync;
var assert = require('assert');
var graphviz = require('../lib/graphviz');

// Create digraph G
var g = graphviz.digraph("G");

// Add node (ID: Hello)
var n1 = g.addNode( "Hello" );

// Add node (ID: World)
g.addNode( "World" );

// Add edge between the two nodes
g.addEdge( n1, "World" );

// Set common options
g.setOptions( {
  "type":"png",
  "use":"dot",
  "N" : {
    "color":"blue",
    "shape":"Mdiamond"
  },
  "E" : {
    "color" : "red",
    "label" : "Say"
  },
  "G" : {
    "label" : "Example"
  }
}, "hello.png" );

var expected = readFileSync(__filename.replace(/js$/, 'dot'), 'utf-8')
assert.strictEqual(g.to_dot().trim(), expected.trim())
