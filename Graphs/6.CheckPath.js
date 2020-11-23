// Check if Path exist between two vertices.

function checkPath(g, source, destination) {
  //Write code here
  //A list to hold the history of visited nodes (by default all false)
  //Make a node visited whenever you push it into stack
  let visited = [];
  for (var x = 0; x < g.vertices; x++) {
    visited.push(false);
  }
  //Create Stack
  let stack = new Stack(g.vertices);
  stack.push(source);
  visited[source] = true;
  //Traverse while stack is not empty
  while (stack.isEmpty() == false) {
    //Pop a vertex/node from stack
    let current_node = stack.pop();
    //Get adjacent vertices to the current_node from the list,
    //and if only push unvisited adjacent vertices into stack
    //Before pushing into stack, check if it's the destination
    let temp = g.list[current_node].head;
    while (temp != null) {
      if (visited[temp.data] == false) {
        if (temp.data == destination) {
          return true;
        }
        stack.push(temp.data);
        visited[temp.data] = true;
      }
      temp = temp.nextElement
    }
  }

  ////
  return false;
}

let g = new Graph(3);
g.addEdge(0, 1);
g.addEdge(1, 2);
console.log(checkPath(g, 0, 2));
