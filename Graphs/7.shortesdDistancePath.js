function findMin(g, source, destination) {
    if (source === destination) {
        return 0;
    }
    let visited= [];
    let distance= [];

    for (var i=0;i<g.vertices;i++) {
        visited[i]= false;
        distance[i]= 0;
    }

    let queue= new Queue();
    queue.enqueue(source);
    visited[source]= true;

    while(queue.isEmpty() === false) {
        let currentNode= queue.dequeue();

        let temp= g.list[currentNode].getHead();

        while(temp!==null) {
            if (!visited[temp.data]) {
                visited[temp.data]= true;
                queue.enqueue(temp.data);
                distance[temp.data]= distance[currentNode]+1;
            }
            if (temp.data === destination) {
                return distance[destination];
            }
            temp= temp.nextElement;
        }
    }
    return -1;
}
let g = new Graph(7);
g.addEdge(1,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.addEdge(4,5);
g.addEdge(2,5);
g.addEdge(5,6);
g.addEdge(3,6);
console.log(findMin(g, 1, 6)); // 2.
