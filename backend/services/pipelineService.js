const buildGraph = (nodes, edges) => {
  const adjacency = {};
  const inDegree = {};

  nodes.forEach((node) => {

    adjacency[node.id] = [];
    inDegree[node.id] = 0;

  });


  edges.forEach((edge) => {
    adjacency[edge.source].push(edge.target);
    inDegree[edge.target]++;
  });


  return { adjacency, inDegree };
};


const isDAG = (nodes, edges) => {
  const { adjacency, inDegree } = buildGraph(nodes, edges);
  const queue = [];

  Object.keys(inDegree).forEach((nodeId) => {

    if (inDegree[nodeId] === 0) {
      queue.push(nodeId);
    }

  });

  let visitedCount = 0;

  while (queue.length) {
    const node = queue.shift();
    visitedCount++;

    adjacency[node].forEach((neighbor) => {
      inDegree[neighbor]--;


      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }

    });

  }

  return visitedCount === nodes.length;

};


const calculatePipeline = (nodes, edges) => {
  return {

    num_nodes: nodes.length,

    num_edges: edges.length,

    is_dag: isDAG(nodes, edges),

  };

};


module.exports = { calculatePipeline };