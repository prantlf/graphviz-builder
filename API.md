## Classes

<dl>
<dt><a href="#Graph">Graph</a></dt>
<dd></dd>
<dt><a href="#Node">Node</a></dt>
<dd></dd>
<dt><a href="#Edge">Edge</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#graph">graph(id)</a> ⇒ <code><a href="#Graph">Graph</a></code></dt>
<dd><p>Create a new undirected graph</p>
</dd>
<dt><a href="#digraph">digraph(id)</a> ⇒ <code><a href="#Graph">Graph</a></code></dt>
<dd><p>Create a new directed graph</p>
</dd>
</dl>

<a name="Graph"></a>

## Graph
**Kind**: global class  
**Api**: public  

* [Graph](#Graph)
    * [new Graph(graph, id)](#new_Graph_new)
    * [.addNode(id, attrs)](#Graph+addNode) ⇒ [<code>Node</code>](#Node)
    * [.removeNode(id, force)](#Graph+removeNode)
    * [.getNode(id)](#Graph+getNode) ⇒ [<code>Node</code>](#Node)
    * [.nodeCount()](#Graph+nodeCount) ⇒ <code>Integer</code>
    * [.addEdge(nodeOne, nodeTwo, attrs)](#Graph+addEdge) ⇒ [<code>Edge</code>](#Edge)
    * [.edgeCount()](#Graph+edgeCount) ⇒ <code>Integer</code>
    * [.addCluster(id)](#Graph+addCluster) ⇒ [<code>Graph</code>](#Graph)
    * [.getCluster(id)](#Graph+getCluster) ⇒ [<code>Graph</code>](#Graph)
    * [.clusterCount()](#Graph+clusterCount) ⇒ <code>Integer</code>
    * [.set(name, value)](#Graph+set)
    * [.get(name)](#Graph+get) ⇒ <code>Void</code>
    * [.setNodeAttribut(name, value)](#Graph+setNodeAttribut)
    * [.getNodeAttribut(name)](#Graph+getNodeAttribut) ⇒ <code>Void</code>
    * [.setEdgeAttribut(name, value)](#Graph+setEdgeAttribut)
    * [.getEdgeAttribut(name)](#Graph+getEdgeAttribut) ⇒ <code>Void</code>
    * [.to_dot()](#Graph+to_dot) ⇒ <code>String</code>

<a name="new_Graph_new"></a>

### new Graph(graph, id)
Create a new graph


| Param | Type | Description |
| --- | --- | --- |
| graph | [<code>Graph</code>](#Graph) | Parent Graph |
| id | <code>String</code> | The graphID |

<a name="Graph+addNode"></a>

### graph.addNode(id, attrs) ⇒ [<code>Node</code>](#Node)
Create a new node

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | The node ID |
| attrs | <code>Object</code> | Node attributs |

<a name="Graph+removeNode"></a>

### graph.removeNode(id, force)
Remove a node

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | The node ID |
| force | <code>Boolean</code> | Remove edges related to node |

<a name="Graph+getNode"></a>

### graph.getNode(id) ⇒ [<code>Node</code>](#Node)
Return a node for a given ID

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | The node ID |

<a name="Graph+nodeCount"></a>

### graph.nodeCount() ⇒ <code>Integer</code>
Return the number of nodes in the current graph

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Api**: public  
<a name="Graph+addEdge"></a>

### graph.addEdge(nodeOne, nodeTwo, attrs) ⇒ [<code>Edge</code>](#Edge)
Create a new edge

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| nodeOne | <code>String</code> \| [<code>Node</code>](#Node) |  |
| nodeTwo | <code>String</code> \| [<code>Node</code>](#Node) |  |
| attrs | <code>Object</code> | Node attributs |

<a name="Graph+edgeCount"></a>

### graph.edgeCount() ⇒ <code>Integer</code>
Return the number of edges in the current graph

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Api**: public  
<a name="Graph+addCluster"></a>

### graph.addCluster(id) ⇒ [<code>Graph</code>](#Graph)
Create a new subgraph

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | The subgraph ID |

<a name="Graph+getCluster"></a>

### graph.getCluster(id) ⇒ [<code>Graph</code>](#Graph)
Return a subgraph for a given ID

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | The subgraph ID |

<a name="Graph+clusterCount"></a>

### graph.clusterCount() ⇒ <code>Integer</code>
Return the number of subgraphs in the current graph

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Api**: public  
<a name="Graph+set"></a>

### graph.set(name, value)
Set a graph attribut

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The attribut name |
| value | <code>Void</code> | The attribut value |

<a name="Graph+get"></a>

### graph.get(name) ⇒ <code>Void</code>
Get a graph attribut

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The attribut name |

<a name="Graph+setNodeAttribut"></a>

### graph.setNodeAttribut(name, value)
Set a global node attribut

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The attribut name |
| value | <code>Void</code> | The attribut value |

<a name="Graph+getNodeAttribut"></a>

### graph.getNodeAttribut(name) ⇒ <code>Void</code>
Get a global node attribut

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The attribut name |

<a name="Graph+setEdgeAttribut"></a>

### graph.setEdgeAttribut(name, value)
Set a global edge attribut

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The attribut name |
| value | <code>Void</code> | The attribut value |

<a name="Graph+getEdgeAttribut"></a>

### graph.getEdgeAttribut(name) ⇒ <code>Void</code>
Get a global edge attribut

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The attribut name |

<a name="Graph+to_dot"></a>

### graph.to\_dot() ⇒ <code>String</code>
Generate the GraphViz script

**Kind**: instance method of [<code>Graph</code>](#Graph)  
**Api**: public  
<a name="Node"></a>

## Node
**Kind**: global class  
**Api**: public  

* [Node](#Node)
    * [new Node(graph, id)](#new_Node_new)
    * [.to()](#Node+to)
    * [.set(name, value)](#Node+set)
    * [.get(name)](#Node+get) ⇒ <code>Void</code>
    * [.to_dot()](#Node+to_dot)

<a name="new_Node_new"></a>

### new Node(graph, id)
Create a new node


| Param | Type | Description |
| --- | --- | --- |
| graph | [<code>Graph</code>](#Graph) | Parent Graph |
| id | <code>String</code> | The node ID |

<a name="Node+to"></a>

### node.to()
**Kind**: instance method of [<code>Node</code>](#Node)  
<a name="Node+set"></a>

### node.set(name, value)
Set a node attribut

**Kind**: instance method of [<code>Node</code>](#Node)  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The attribut name |
| value | <code>Void</code> | The attribut value |

<a name="Node+get"></a>

### node.get(name) ⇒ <code>Void</code>
Get a node attribut

**Kind**: instance method of [<code>Node</code>](#Node)  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The attribut name |

<a name="Node+to_dot"></a>

### node.to\_dot()
**Kind**: instance method of [<code>Node</code>](#Node)  
**Api**: private  
<a name="Edge"></a>

## Edge
**Kind**: global class  
**Api**: public  

* [Edge](#Edge)
    * [new Edge(graph, nodeOne, nodeTwo)](#new_Edge_new)
    * [.set(name, value)](#Edge+set)
    * [.get(name)](#Edge+get) ⇒ <code>Void</code>
    * [.to_dot()](#Edge+to_dot)

<a name="new_Edge_new"></a>

### new Edge(graph, nodeOne, nodeTwo)
Create a new edge


| Param | Type | Description |
| --- | --- | --- |
| graph | [<code>Graph</code>](#Graph) | Parent Graph |
| nodeOne | <code>String</code> \| [<code>Node</code>](#Node) | The first node |
| nodeTwo | <code>String</code> \| [<code>Node</code>](#Node) | The second node |

<a name="Edge+set"></a>

### edge.set(name, value)
Set an edge attribut

**Kind**: instance method of [<code>Edge</code>](#Edge)  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The attribut name |
| value | <code>Void</code> | The attribut value |

<a name="Edge+get"></a>

### edge.get(name) ⇒ <code>Void</code>
Get an edge attribut

**Kind**: instance method of [<code>Edge</code>](#Edge)  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The attribut name |

<a name="Edge+to_dot"></a>

### edge.to\_dot()
**Kind**: instance method of [<code>Edge</code>](#Edge)  
**Api**: private  
<a name="graph"></a>

## graph(id) ⇒ [<code>Graph</code>](#Graph)
Create a new undirected graph

**Kind**: global function  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | The graphID |

<a name="digraph"></a>

## digraph(id) ⇒ [<code>Graph</code>](#Graph)
Create a new directed graph

**Kind**: global function  
**Api**: public  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | The graphID |

