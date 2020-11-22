function bfsTraversal(graph) {
    if (graph.vertices <1) {
        return;
    }

    let obj= {
        result:""
    }

    let visited= [];

    for (var i=0;i<graph.vertices;i++) {
        visited.push(false);
    }

    for (var i=0;i<graph.vertices;i++) {
        if(!visited[i]) {
            bfs_traversal_helper(graph,i, visited, obj);
        }
    };
    return obj.result;
}

function bfs_traversal_helper(g, source, visited, obj) {
    let queue= new Queue();

    queue.enqueue(source);
    visited[source]= true;

    while (queue.isEmpty() === false) {
        let currentNode= queue.dequeue();
        obj.result+= currentNode;

        let temp= g.list[currentNode].getHead();
        while (temp!==null) {
            if (visited[temp.data] === false) {
                visited[temp.data]= true;
                queue.enqueue(temp.data);
            }
            temp= temp.nextElement;
        }
    }
}
let g1=new Graph(6);
g1.addEdge(1, 2);
g1.addEdge(1, 3);
g1.addEdge(2, 4);
g1.addEdge(2, 5);
console.log(bfsTraversal(g1, 0)); // 013254.
