// Mother vertex , we can reach from this vertex to all other vertices.
// Below solution can be improved by kosaraju strongly connected ALGO.

function findMotherVertex(g) {
    if (g.vertices <1) {
        return null;
    }
    let numberOfVerticesReached= 0;
    for (var i=0;i<g.vertices;i++) {
        numberOfVerticesReached= DFS(g, i);
        if (numberOfVerticesReached === g.vertices) {
            return i;
        }
    }
    return -1;
}

function DFS(graph, source) {
    let visited= [];
    let verticesCount= 0;
    let stack= new Stack();
    for (var i=0;i<g.vertices;i++) {
        visited[i]= false;
    }
    stack.push(source);
    visited[source]= true;

    while(stack.isEmpty() === false) {
        let currentNode= stack.pop();
        let temp= g.list[currentNode].getHead();

        while(temp!==null) {
            if (!visited[temp.data]) {
                visited[temp.data]= true;
                stack.push(temp.data);
                verticesCount+=1;
            }
            temp= temp.nextElement;
        }
    }
    return verticesCount+1; // including source itself.
}
let g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(3, 0);
g.addEdge(3, 1);
console.log(findMotherVertex(g));// 3.

// TC :  O(V(V + E))
