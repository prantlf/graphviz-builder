type Value = string | number | boolean;

type Attributs = Record<string, Value>;

interface AttributContainer<T>  {
  get(name: string): Value;
  set(name: string, value: Value): T;
  to_dot(): string;
}

export interface Node extends AttributContainer<Node> {
  to(id: string | Node, attrs?: Attributs): Node;
}

export type Edge = AttributContainer<Edge>

interface Options {
  use?: 'dot' | 'neato' | 'fdp' | 'twopi' | 'circo' | 'osage';
  N?: Attributs;
  E?: Attributs;
  G?: Attributs;
}

export interface Graph extends AttributContainer<Graph> {
  getNodeAttribut(name: string): Value;
  setNodeAttribut(name: string, value: Value);
  getEdgeAttribut(name: string): Value;
  setEdgeAttribut(name: string, value: Value);
  setOptions(options: Options);
  from(id: string): Node;
  getNode(id: string): Node;
  addNode(id: string, attrs?: Attributs): Node;
  removeNode(id: string, force?: boolean);
  nodeCount(): number;
  addEdge(nodeOne: string | Node, nodeTwo: string | Node, attrs?: Attributs): Edge;
  edgeCount(): number;
  getCluster(id: string): Graph;
  addCluster(id: string): Graph;
  clusterCount(): number;
}

export function graph (id: string): Graph;
export function digraph (id: string, isStrict?: boolean): Graph;
