var { readFileSync } = require('fs');
var assert = require('assert');
var graphviz = require('../lib/graphviz');

//create a graph
var g = graphviz.digraph("G");

//add some nodes
g.addNode("a");
g.addNode("b");
g.addNode("c");
g.addNode("d");
g.addNode("e");

//add relations
g.addEdge("a", "b");
g.addEdge("a", "c");
g.addEdge("c", "b");
g.addEdge("a", "d");

var expected = readFileSync(__filename.replace(/.js$/, '_original.dot'), 'utf-8')
assert.strictEqual(g.to_dot().trim(), expected.trim())

//soft removeNode
//will remove the node, but not the edges
g.removeNode("e");

var expected = readFileSync(__filename.replace(/.js$/, '_soft.dot'), 'utf-8')
assert.strictEqual(g.to_dot().trim(), expected.trim())

//hard removeNode
//removes the node and the edgesfrom and to the node
g.removeNode("c", true);

var expected = readFileSync(__filename.replace(/.js$/, '_hard.dot'), 'utf-8')
assert.strictEqual(g.to_dot().trim(), expected.trim())
