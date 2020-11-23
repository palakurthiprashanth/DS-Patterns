function numEdges(g) {
  //For undirected graph, just sum up the size of 
  //All the adjacency lists for each vertex will give us total number of edges in the graph  
  let sum = 0;
  for (var i = 0; i < g.vertices; i++) {
    let temp = g.list[i].getHead();
    while (temp != null) {
      sum += 1;
      temp = temp.nextElement;
    }
  }
  return sum / 2;
}
