var Hash = require('./core_ext/hash').Hash,
  Node = require('./node').Node,
  Edge = require('./edge').Edge,
  gvattrs = require('./attributs');

var Attributs = gvattrs.Attributs;

/**
 * Create a new graph
 * @constructor
 * @param {Graph} graph Parent Graph
 * @param {String} id The graphID
 * @return {Graph}
 * @api public
 */
var Graph = function(graph, id) {
  this.relativeGraph = graph;
  this.id = id;
  this.type = 'graph';
  this.gvPath = '';
  this.nodes = new Hash();
  this.edges = [];
  this.clusters = new Hash();
  if (this.relativeGraph == null) {
    this.graphAttributs = new Attributs('G');
  } else {
    this.graphAttributs = new Attributs('C');
  }
  this.nodesAttributs = new Attributs('N');
  this.edgesAttributs = new Attributs('E');
  this.use = 'dot';
};
exports.Graph = Graph;

/**
 * Create a new node
 *
 * @param {String} id The node ID
 * @param {Object} attrs Node attributs
 * @return {Node}
 * @api public
 */
Graph.prototype.addNode = function(id, attrs) {
  var node = new Node(this, id);
  this.nodes.setItem(id, node);
  if (attrs) {
    for (var k in attrs) {
      node.set(k, attrs[k]);
    }
  }
  return node;
};

/**
 * Remove a node
 *
 * @param {String} id The node ID
 * @param {Boolean} force Remove edges related to node
 * @api public
 */
Graph.prototype.removeNode = function(id, force) {
  if (force === true) {
    for (var i = 0, l = this.edges.length; i < l;) {
      var edge = this.edges[i];
      if (edge.nodeOne.id === id || edge.nodeTwo.id === id) {
        this.edges.splice(i, 1);
        --l;
      } else {
        ++i;
      }
    }
  }
  this.nodes.removeItem(id);
};

/**
 * Return a node for a given ID
 *
 * @param {String} id The node ID
 * @return {Node}
 * @api public
 */
Graph.prototype.getNode = function(id) {
  return this.nodes.getItem(id);
};

Graph.prototype.from = function(id) {
  var node = this.nodes.getItem(id);
  if (node === undefined) {
    node = this.addNode(id);
  }
  return node;
};

/**
 * Return the number of nodes in the current graph
 *
 * @return {Integer}
 * @api public
 */
Graph.prototype.nodeCount = function() {
  return this.nodes.length;
};

/**
 * Create a new edge
 *
 * @param {String|Node} nodeOne
 * @param {String|Node} nodeTwo
 * @param {Object} attrs Node attributs
 * @return {Edge}
 * @api public
 */
Graph.prototype.addEdge = function(nodeOne, nodeTwo, attrs) {
  var _nodeOne = nodeOne;
  var _nodeTwo = nodeTwo;
  if (typeof nodeOne === 'string') {
    _nodeOne = this.nodes.getItem(nodeOne);
    if (_nodeOne === undefined) {
      _nodeOne = this.addNode(nodeOne);
    }
  }
  if (typeof nodeTwo === 'string') {
    _nodeTwo = this.nodes.getItem(nodeTwo);
    if (_nodeTwo === undefined) {
      _nodeTwo = this.addNode(nodeTwo);
    }
  }

  var edge = new Edge(this, _nodeOne, _nodeTwo);
  if (attrs) {
    for (var k in attrs) {
      edge.set(k, attrs[k]);
    }
  }
  this.edges.push(edge);

  return edge;
};

/**
 * Return the number of edges in the current graph
 *
 * @return {Integer}
 * @api public
 */
Graph.prototype.edgeCount = function() {
  return this.edges.length;
};

/**
 * Create a new subgraph
 *
 * @param {String} id The subgraph ID
 * @return {Graph}
 * @api public
 */
Graph.prototype.addCluster = function(id) {
  var cluster = new Graph(this, id);
  cluster.type = this.type;
  this.clusters.setItem(id, cluster);
  return cluster;
};

/**
 * Return a subgraph for a given ID
 *
 * @param {String} id The subgraph ID
 * @return {Graph}
 * @api public
 */
Graph.prototype.getCluster = function(id) {
  return this.clusters.getItem(id);
};

/**
 * Return the number of subgraphs in the current graph
 *
 * @return {Integer}
 * @api public
 */
Graph.prototype.clusterCount = function() {
  return this.clusters.length;
};

/**
 * Set a graph attribut
 *
 * @param {String} name The attribut name
 * @param {Void} value The attribut value
 * @api public
 */
Graph.prototype.set = function(name, value) {
  this.graphAttributs.set(name, value);
  return this;
};

/**
 * Get a graph attribut
 *
 * @param {String} name The attribut name
 * @return {Void}
 * @api public
 */
Graph.prototype.get = function(name) {
  return this.graphAttributs.get(name);
};

/**
 * Set a global node attribut
 *
 * @param {String} name The attribut name
 * @param {Void} value The attribut value
 * @api public
 */
Graph.prototype.setNodeAttribut = function(name, value) {
  this.nodesAttributs.set(name, value);
};

/**
 * Get a global node attribut
 *
 * @param {String} name The attribut name
 * @return {Void}
 * @api public
 */
Graph.prototype.getNodeAttribut = function(name) {
  return this.nodesAttributs.get(name);
};

/**
 * Set a global edge attribut
 *
 * @param {String} name The attribut name
 * @param {Void} value The attribut value
 * @api public
 */
Graph.prototype.setEdgeAttribut = function(name, value) {
  this.edgesAttributs.set(name, value);
};

/**
 * Get a global edge attribut
 *
 * @param {String} name The attribut name
 * @return {Void}
 * @api public
 */
Graph.prototype.getEdgeAttribut = function(name) {
  return this.edgesAttributs.get(name);
};

/**
 * Sets common options for the graph, nodes and edges.
 *
 * @param {Object} type The options
 * @api public
 *
 * Options :
 *   - use : layout to use (dot, neato, fdp, twopi, circo, osage)
 *   - G :
 *   - N :
 *   - E :
 */
Graph.prototype.setOptions = function(options) {
  var attr;

  // Get extra Graph Options
  if (options.G !== undefined) {
    for (attr in options.G) {
      this.set(attr, options.G[attr]);
    }
  }
  // Get extra Node Options
  if (options.N !== undefined) {
    for (attr in options.N) {
      this.setNodeAttribut(attr, options.N[attr]);
    }
  }
  // Get extra Edge Options
  if (options.E !== undefined) {
    for (attr in options.E) {
      this.setEdgeAttribut(attr, options.E[attr]);
    }
  }

  // Get use
  if (options.use !== undefined) {
    this.use = options.use;
    this.set('layout', this.use);
  }
}

/**
 * Generate the GraphViz script
 *
 * @return {String}
 * @api public
 */
Graph.prototype.to_dot = function() {
  var i, l, keys, entry;

  var dotScript = '';
  if (this.relativeGraph == null) {
    dotScript = this.type + ' "' + this.id + '" {\n';
  } else {
    dotScript = 'subgraph "' + this.id + '" {\n';
  }

  // Graph attributs
  if (this.graphAttributs.length() > 0) {
    dotScript += '  graph' + this.graphAttributs.to_dot() + ';\n';
  }

  // Nodes attributs
  if (this.nodesAttributs.length() > 0) {
    dotScript += '  node' + this.nodesAttributs.to_dot() + ';\n';
  }

  // Edges attributs
  if (this.edgesAttributs.length() > 0) {
    dotScript += '  edge' + this.edgesAttributs.to_dot() + ';\n';
  }

  // Each clusters
  for (keys = this.clusters.items.values();;) {
    entry = keys.next();
    if (entry.done) break;
    dotScript += entry.value.to_dot() + '\n';
  }

  // Each nodes
  for (keys = this.nodes.items.values();;) {
    entry = keys.next();
    if (entry.done) break;
    dotScript += '  ' + entry.value.to_dot() + ';\n';
  }

  // Each edges
  for (i = 0, l = this.edges.length; i < l; ++i) {
    dotScript += '  ' + this.edges[i].to_dot() + ';\n';
  }

  dotScript += '}\n';

  return dotScript;
};
