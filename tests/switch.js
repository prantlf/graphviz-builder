var readFileSync = require('fs').readFileSync;
var assert = require('assert');
var graphviz = require('../lib/graphviz');

var graph_g = graphviz.digraph( "g" );
graph_g.set( "bgcolor", "#808080" );
graph_g.set( "rankdir", "LR" );
var graph_u1 = graph_g.addCluster( "u1" )
graph_u1.set( "bgcolor", "#808080" );
graph_u1.set( "rankdir", "LR" );
var graph_u3 = graph_g.addCluster( "u3" )
graph_u3.set( "bgcolor", "#808080" );
graph_u3.set( "rankdir", "LR" );
var graph_u5 = graph_g.addCluster( "u5" )
graph_u5.set( "bgcolor", "#808080" );
graph_u5.set( "rankdir", "LR" );
var graph_u7 = graph_g.addCluster( "u7" )
graph_u7.set( "bgcolor", "#808080" );
graph_u7.set( "rankdir", "LR" );
var graph_u15 = graph_g.addCluster( "u15" )
graph_u15.set( "bgcolor", "#808080" );
graph_u15.set( "rankdir", "LR" );
var graph_u23 = graph_g.addCluster( "u23" )
graph_u23.set( "bgcolor", "#808080" );
graph_u23.set( "rankdir", "LR" );
var graph_u31 = graph_g.addCluster( "u31" )
graph_u31.set( "bgcolor", "#808080" );
graph_u31.set( "rankdir", "LR" );
var graph_u39 = graph_g.addCluster( "u39" )
graph_u39.set( "bgcolor", "#808080" );
graph_u39.set( "rankdir", "LR" );
var graph_u47 = graph_g.addCluster( "u47" )
graph_u47.set( "bgcolor", "#808080" );
graph_u47.set( "rankdir", "LR" );
var graph_u55 = graph_g.addCluster( "u55" )
graph_u55.set( "bgcolor", "#808080" );
graph_u55.set( "rankdir", "LR" );
var graph_u63 = graph_g.addCluster( "u63" )
graph_u63.set( "bgcolor", "#808080" );
graph_u63.set( "rankdir", "LR" );
var graph_u71 = graph_g.addCluster( "u71" )
graph_u71.set( "bgcolor", "#808080" );
graph_u71.set( "rankdir", "LR" );
var graph_u89 = graph_g.addCluster( "u89" )
graph_u89.set( "bgcolor", "#808080" );
graph_u89.set( "rankdir", "LR" );
var graph_u107 = graph_g.addCluster( "u107" )
graph_u107.set( "bgcolor", "#808080" );
graph_u107.set( "rankdir", "LR" );
var graph_u125 = graph_g.addCluster( "u125" )
graph_u125.set( "bgcolor", "#808080" );
graph_u125.set( "rankdir", "LR" );
var graph_u143 = graph_g.addCluster( "u143" )
graph_u143.set( "bgcolor", "#808080" );
graph_u143.set( "rankdir", "LR" );
var graph_u177 = graph_g.addCluster( "u177" )
graph_u177.set( "bgcolor", "#808080" );
graph_u177.set( "rankdir", "LR" );
var graph_u211 = graph_g.addCluster( "u211" )
graph_u211.set( "bgcolor", "#808080" );
graph_u211.set( "rankdir", "LR" );
graph_u1.addNode( "1", {"height" : "0.3", "shape" : "circle", "style" : "invis", "width" : "0.3", } );
graph_g.addEdge( "1", "a", {"color" : "#0000ff", "dir" : "none", } );
graph_u1.addNode( "2", {"height" : "0.3", "shape" : "circle", "style" : "invis", "width" : "0.3", } );
graph_g.addEdge( "2", "b", {"color" : "#ff0000", "dir" : "none", } );
graph_u1.addNode( "3", {"height" : "0.3", "shape" : "circle", "style" : "invis", "width" : "0.3", } );
graph_g.addEdge( "3", "c", {"color" : "#ffff00", "dir" : "none", } );
graph_u1.addNode( "4", {"height" : "0.3", "shape" : "circle", "style" : "invis", "width" : "0.3", } );
graph_g.addEdge( "4", "d", {"color" : "#00ff00", "dir" : "none", } );
graph_u1.addNode( "5", {"height" : "0.3", "shape" : "circle", "style" : "invis", "width" : "0.3", } );
graph_g.addEdge( "5", "e", {"color" : "#000000", "dir" : "none", } );
graph_u1.addNode( "6", {"height" : "0.3", "shape" : "circle", "style" : "invis", "width" : "0.3", } );
graph_g.addEdge( "6", "f", {"color" : "#00ffff", "dir" : "none", } );
graph_u1.addNode( "7", {"height" : "0.3", "shape" : "circle", "style" : "invis", "width" : "0.3", } );
graph_g.addEdge( "7", "g", {"color" : "#ffffff", "dir" : "none", } );
graph_u1.addNode( "8", {"height" : "0.3", "shape" : "circle", "style" : "invis", "width" : "0.3", } );
graph_g.addEdge( "8", "h", {"color" : "#ff00ff", "dir" : "none", } );
graph_u211.addNode( "10", {"height" : "0.3", "shape" : "circle", "style" : "invis", "width" : "0.3", } );
graph_u211.addNode( "20", {"height" : "0.3", "shape" : "circle", "style" : "invis", "width" : "0.3", } );
graph_u211.addNode( "30", {"height" : "0.3", "shape" : "circle", "style" : "invis", "width" : "0.3", } );
graph_u211.addNode( "40", {"height" : "0.3", "shape" : "circle", "style" : "invis", "width" : "0.3", } );
graph_u211.addNode( "50", {"height" : "0.3", "shape" : "circle", "style" : "invis", "width" : "0.3", } );
graph_u211.addNode( "60", {"height" : "0.3", "shape" : "circle", "style" : "invis", "width" : "0.3", } );
graph_u211.addNode( "70", {"height" : "0.3", "shape" : "circle", "style" : "invis", "width" : "0.3", } );
graph_u211.addNode( "80", {"height" : "0.3", "shape" : "circle", "style" : "invis", "width" : "0.3", } );
graph_u3.addNode( "a", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_g.addEdge( "a", "A", {"color" : "#0000ff", "dir" : "none", } );
graph_g.addEdge( "a", "B", {"color" : "#0000ff", "dir" : "none", } );
graph_u3.addNode( "b", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_g.addEdge( "b", "A", {"color" : "#ff0000", "dir" : "none", } );
graph_g.addEdge( "b", "B", {"color" : "#ff0000", "dir" : "none", } );
graph_u3.addNode( "c", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_g.addEdge( "c", "C", {"color" : "#ffff00", "dir" : "none", } );
graph_g.addEdge( "c", "D", {"color" : "#ffff00", "dir" : "none", } );
graph_u3.addNode( "d", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_g.addEdge( "d", "C", {"color" : "#00ff00", "dir" : "none", } );
graph_g.addEdge( "d", "D", {"color" : "#00ff00", "dir" : "none", } );
graph_u3.addNode( "e", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_g.addEdge( "e", "E", {"color" : "#000000", "dir" : "none", } );
graph_g.addEdge( "e", "F", {"color" : "#000000", "dir" : "none", } );
graph_u3.addNode( "f", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_g.addEdge( "f", "E", {"color" : "#00ffff", "dir" : "none", } );
graph_g.addEdge( "f", "F", {"color" : "#00ffff", "dir" : "none", } );
graph_u3.addNode( "g", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_g.addEdge( "g", "G", {"color" : "#ffffff", "dir" : "none", } );
graph_g.addEdge( "g", "H", {"color" : "#ffffff", "dir" : "none", } );
graph_u3.addNode( "h", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_g.addEdge( "h", "G", {"color" : "#ff00ff", "dir" : "none", } );
graph_g.addEdge( "h", "H", {"color" : "#ff00ff", "dir" : "none", } );
graph_u71.addNode( "i", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_u71.addEdge( "i", "I", {"color" : "#ff0000:#0000ff", "dir" : "none", } );
graph_u71.addEdge( "i", "K", {"color" : "#ff0000:#0000ff", "dir" : "none", } );
graph_u71.addNode( "j", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_u71.addEdge( "j", "J", {"color" : "#ff0000:#0000ff", "dir" : "none", } );
graph_u71.addEdge( "j", "L", {"color" : "#ff0000:#0000ff", "dir" : "none", } );
graph_u89.addNode( "k", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_u89.addEdge( "k", "I", {"color" : "#00ff00:#ffff00", "dir" : "none", } );
graph_u89.addEdge( "k", "K", {"color" : "#00ff00:#ffff00", "dir" : "none", } );
graph_u89.addNode( "l", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_u89.addEdge( "l", "J", {"color" : "#00ff00:#ffff00", "dir" : "none", } );
graph_u89.addEdge( "l", "L", {"color" : "#00ff00:#ffff00", "dir" : "none", } );
graph_u107.addNode( "m", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_u107.addEdge( "m", "M", {"color" : "#00ffff:#000000", "dir" : "none", } );
graph_u107.addEdge( "m", "O", {"color" : "#00ffff:#000000", "dir" : "none", } );
graph_u107.addNode( "n", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_u107.addEdge( "n", "N", {"color" : "#00ffff:#000000", "dir" : "none", } );
graph_u107.addEdge( "n", "P", {"color" : "#00ffff:#000000", "dir" : "none", } );
graph_u125.addNode( "o", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_u125.addEdge( "o", "M", {"color" : "#ff00ff:#ffffff", "dir" : "none", } );
graph_u125.addEdge( "o", "O", {"color" : "#ff00ff:#ffffff", "dir" : "none", } );
graph_u125.addNode( "p", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_u125.addEdge( "p", "N", {"color" : "#ff00ff:#ffffff", "dir" : "none", } );
graph_u125.addEdge( "p", "P", {"color" : "#ff00ff:#ffffff", "dir" : "none", } );
graph_u143.addNode( "q", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_u143.addEdge( "q", "Q", {"color" : "#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u143.addEdge( "q", "U", {"color" : "#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u143.addNode( "r", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_u143.addEdge( "r", "R", {"color" : "#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u143.addEdge( "r", "V", {"color" : "#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u143.addNode( "s", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_u143.addEdge( "s", "S", {"color" : "#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u143.addEdge( "s", "W", {"color" : "#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u143.addNode( "t", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_u143.addEdge( "t", "T", {"color" : "#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u143.addEdge( "t", "X", {"color" : "#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u177.addNode( "u", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_u177.addEdge( "u", "Q", {"color" : "#ff00ff:#ffffff:#00ffff:#000000", "dir" : "none", } );
graph_u177.addEdge( "u", "U", {"color" : "#ff00ff:#ffffff:#00ffff:#000000", "dir" : "none", } );
graph_u177.addNode( "v", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_u177.addEdge( "v", "R", {"color" : "#ff00ff:#ffffff:#00ffff:#000000", "dir" : "none", } );
graph_u177.addEdge( "v", "V", {"color" : "#ff00ff:#ffffff:#00ffff:#000000", "dir" : "none", } );
graph_u177.addNode( "w", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_u177.addEdge( "w", "S", {"color" : "#ff00ff:#ffffff:#00ffff:#000000", "dir" : "none", } );
graph_u177.addEdge( "w", "W", {"color" : "#ff00ff:#ffffff:#00ffff:#000000", "dir" : "none", } );
graph_u177.addNode( "x", {"height" : "0.3", "shape" : "circle", "width" : "0.3", } );
graph_u177.addEdge( "x", "T", {"color" : "#ff00ff:#ffffff:#00ffff:#000000", "dir" : "none", } );
graph_u177.addEdge( "x", "X", {"color" : "#ff00ff:#ffffff:#00ffff:#000000", "dir" : "none", } );
graph_u71.addNode( "A", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u71.addEdge( "A", "i", {"color" : "#ff0000:#0000ff", "dir" : "none", } );
graph_u71.addNode( "B", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u71.addEdge( "B", "j", {"color" : "#ff0000:#0000ff", "dir" : "none", } );
graph_u89.addNode( "C", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u89.addEdge( "C", "k", {"color" : "#00ff00:#ffff00", "dir" : "none", } );
graph_u89.addNode( "D", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u89.addEdge( "D", "l", {"color" : "#00ff00:#ffff00", "dir" : "none", } );
graph_u107.addNode( "E", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u107.addEdge( "E", "m", {"color" : "#00ffff:#000000", "dir" : "none", } );
graph_u107.addNode( "F", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u107.addEdge( "F", "n", {"color" : "#00ffff:#000000", "dir" : "none", } );
graph_u125.addNode( "G", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u125.addEdge( "G", "o", {"color" : "#ff00ff:#ffffff", "dir" : "none", } );
graph_u125.addNode( "H", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u125.addEdge( "H", "p", {"color" : "#ff00ff:#ffffff", "dir" : "none", } );
graph_u143.addNode( "I", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u143.addEdge( "I", "q", {"color" : "#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u143.addNode( "J", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u143.addEdge( "J", "r", {"color" : "#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u143.addNode( "K", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u143.addEdge( "K", "s", {"color" : "#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u143.addNode( "L", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u143.addEdge( "L", "t", {"color" : "#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u177.addNode( "M", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u177.addEdge( "M", "u", {"color" : "#ff00ff:#ffffff:#00ffff:#000000", "dir" : "none", } );
graph_u177.addNode( "N", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u177.addEdge( "N", "v", {"color" : "#ff00ff:#ffffff:#00ffff:#000000", "dir" : "none", } );
graph_u177.addNode( "O", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u177.addEdge( "O", "w", {"color" : "#ff00ff:#ffffff:#00ffff:#000000", "dir" : "none", } );
graph_u177.addNode( "P", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u177.addEdge( "P", "x", {"color" : "#ff00ff:#ffffff:#00ffff:#000000", "dir" : "none", } );
graph_u211.addNode( "Q", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u211.addEdge( "Q", "10", {"color" : "#ff00ff:#ffffff:#00ffff:#000000:#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u211.addNode( "R", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u211.addEdge( "R", "20", {"color" : "#ff00ff:#ffffff:#00ffff:#000000:#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u211.addNode( "S", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u211.addEdge( "S", "30", {"color" : "#ff00ff:#ffffff:#00ffff:#000000:#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u211.addNode( "T", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u211.addEdge( "T", "40", {"color" : "#ff00ff:#ffffff:#00ffff:#000000:#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u211.addNode( "U", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u211.addEdge( "U", "50", {"color" : "#ff00ff:#ffffff:#00ffff:#000000:#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u211.addNode( "V", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u211.addEdge( "V", "60", {"color" : "#ff00ff:#ffffff:#00ffff:#000000:#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u211.addNode( "W", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u211.addEdge( "W", "70", {"color" : "#ff00ff:#ffffff:#00ffff:#000000:#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );
graph_u211.addNode( "X", {"height" : "0.3", "shape" : "diamond", "width" : "0.3", } );
graph_u211.addEdge( "X", "80", {"color" : "#ff00ff:#ffffff:#00ffff:#000000:#00ff00:#ffff00:#ff0000:#0000ff", "dir" : "none", } );

var expected = readFileSync(__filename.replace(/js$/, 'dot'), 'utf-8')
assert.strictEqual(graph_g.to_dot().trim(), expected.trim())
