function detectCycle(g) {
  let visited = [];
  for (var i = 0; i < g.vertices; i++) {
    visited.push(false);
  }
  for (var i = 0; i < g.vertices; i++) {
    if (!visited[i]) {
      let queue = new Queue(g.vertices);
      queue.enqueue(i);
      visited[i] = true;
      while (queue.isEmpty() === false) {
        let currentNode = queue.dequeue();
        let temp = g.list[currentNode].getHead();
        while (temp !== null) {
          if (!visited[temp.data]) {
            queue.enqueue(temp.data);
            visited[temp.data] = true;
            temp = temp.nextElement;
          } else {
            return "cycle";
          }
        }
      }
    }
  }
  return "no cycle";
}
let g=new Graph(6);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(3, 4);
g.addEdge(4, 5);

console.log(detectCycle(g));// no cycle.
g.addEdge(5, 3);
console.log(detectCycle(g));// cycle.
