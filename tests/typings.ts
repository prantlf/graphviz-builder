import { graph, digraph, Graph, Node, Edge } from '../dist/index.js'

const d: Graph = digraph('G')
const d2: Graph = digraph('G', true)
const g: Graph = graph('G')
const n1: Node = g.addNode('Hello', { color: 'blue' });
const n3: Node = n1.set('style', 'filled');
const v1 = n1.get('style');
const n2: Node = g.addNode('World');
const ndot: string = n2.to_dot();
const e1: Edge = g.addEdge(n1, 'Hello', { color: 'red' });
const e2: Edge = g.addEdge(n2, 'World');
const e3: Edge = e2.set('color', 'red');
const v2 = e2.get('color');
const edot: string = e2.to_dot();
const n4: Node = n1.to(n2, { color: 'green' });
const n5: Node = n2.to('Hello');
const g2: Graph = g.set('levels', 1);
const v3 = g.get('levels');
g.removeNode('Hello');
g.removeNode('World', true);
const n6: Node = g.from('Bye');
const n7: Node = g.getNode('Bye');
const i1: number = g.nodeCount();
const i2: number = g.edgeCount();
const c1: Graph = g.addCluster('Sub');
const c2: Graph = g.getCluster('Sub');
const i3: number = g.clusterCount();
g.setNodeAttribut('bgcolor', 'grey');
const v4 = g.getNodeAttribut('bgcolor');
g.setEdgeAttribut('width', 2);
const v5 = g.getEdgeAttribut('width');
g.setOptions({})
g.setOptions({
  use: 'neato',
  N: {
    bgcolor: 'white'
  },
  E: {
    width: 1
  },
  G: {
    layout: 'dot'
  }
})
const gdot: string = g.to_dot();
