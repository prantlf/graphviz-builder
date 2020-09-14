var Graph = require('./deps/graph').Graph;

/**
 * Create a new undirected graph
 * @param {String} id The graphID
 * @return {Graph}
 * @api public
 */
exports.graph = function(id) {
  var graph = new Graph(null, id);
  graph.type = 'graph';
  return graph;
};

/**
 * Create a new directed graph
 * @param {String} id The graphID
 * @param {Boolean} isStrict if the Graph is strict (optional, defaults to `false`)
 * @return {Graph}
 * @api public
 */
exports.digraph = function(id, isStrict) {
  var graph = new Graph(null, id);
  graph.type = 'digraph';
  graph.isStrict = isStrict || false;
  return graph;
};
