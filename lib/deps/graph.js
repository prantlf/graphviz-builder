/**
 * Module dependencies
 */
var Hash = require('./core_ext/hash').Hash,
  Node = require('./node').Node,
  Edge = require('./edge').Edge,
  gvattrs = require('./attributs'),
  Attributs = gvattrs.Attributs;

/**
 * Create a new graph
 * @constructor
 * @param {Graph} graph Parent Graph
 * @param {String} id The graphID
 * @return {Graph}
 * @api public
 */
var Graph = (exports.Graph = function(graph, id) {
  this.relativeGraph = graph;
  this.id = id;
  this.type = 'graph';
  this.gvPath = '';
  this.nodes = new Hash();
  this.edges = new Array();
  this.clusters = new Hash();
  if (this.relativeGraph == null) {
    this.graphAttributs = new Attributs('G');
  } else {
    this.graphAttributs = new Attributs('C');
  }
  this.nodesAttributs = new Attributs('N');
  this.edgesAttributs = new Attributs('E');
  this.use = 'dot';
});

/**
 * Create a new node
 *
 * @param {String} id The node ID
 * @param {Object} attrs Node attributs
 * @return {Node}
 * @api public
 */
Graph.prototype.addNode = function(id, attrs) {
  this.nodes.setItem(id, new Node(this, id));
  if (attrs) {
    for (k in attrs) {
      this.nodes.items[id].set(k, attrs[k]);
    }
  }

  return this.nodes.items[id];
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
    for (i = 0; i < this.edges.length; ++i) {
      if (this.edges[i].nodeOne.id == id || this.edges[i].nodeTwo.id == id) {
        delete this.edges[i];
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
  return this.nodes.items[id];
};

Graph.prototype.from = function(id) {
  if (this.nodes.items[id] == undefined) {
    this.addNode(id);
  }
  return this.nodes.items[id];
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
  if (typeof nodeOne == 'string') {
    _nodeOne = this.nodes.items[nodeOne];
    if (_nodeOne == null) {
      _nodeOne = this.addNode(nodeOne);
    }
  }
  if (typeof nodeTwo == 'string') {
    _nodeTwo = this.nodes.items[nodeTwo];
    if (_nodeTwo == null) {
      _nodeTwo = this.addNode(nodeTwo);
    }
  }

  var edge = new Edge(this, _nodeOne, _nodeTwo);
  if (attrs) {
    for (k in attrs) {
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
  return this.clusters.items[id];
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
 * Generate the GraphViz script
 *
 * @return {String}
 * @api public
 */
Graph.prototype.to_dot = function() {
  var dotScript = '';
  if (this.relativeGraph == null) {
    dotScript = this.type + ' "' + this.id + '" {\n';
  } else {
    dotScript = 'subgraph "' + this.id + '" {\n';
  }

  // Graph attributs
  if (this.graphAttributs.length() > 0) {
    dotScript = dotScript + '  graph' + this.graphAttributs.to_dot() + ';\n';
  }

  // Nodes attributs
  if (this.nodesAttributs.length() > 0) {
    dotScript = dotScript + '  node' + this.nodesAttributs.to_dot() + ';\n';
  }

  // Edges attributs
  if (this.edgesAttributs.length() > 0) {
    dotScript = dotScript + '  edge' + this.edgesAttributs.to_dot() + ';\n';
  }

  // Each clusters
  for (var id in this.clusters.items) {
    if (this.clusters.items.hasOwnProperty(id)) {
      dotScript = dotScript + this.clusters.items[id].to_dot() + '\n';
    }
  }

  // Each nodes
  for (var id in this.nodes.items) {
    if (this.nodes.items.hasOwnProperty(id)) {
      dotScript = dotScript + '  ' + this.nodes.items[id].to_dot() + ';\n';
    }
  }

  // Each edges
  for (var i in this.edges) {
    if (this.edges.hasOwnProperty(i)) {
      dotScript = dotScript + '  ' + this.edges[i].to_dot() + ';\n';
    }
  }

  dotScript = dotScript + '}\n';

  return dotScript;
};
