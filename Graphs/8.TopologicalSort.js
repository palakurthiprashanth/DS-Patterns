function topological_sort(vertices, edges) {
    let sortedOrder= [];
    if (vertices <=0) {
        return [];
    }

    // Intialize indegree array to 0
    let inDegree= Array(vertices).fill(0);
    // create graph.
    let graph= Array(vertices).fill(0).map(()=>Array());

    edges.forEach(function(edge) {
        let parent= edge[0];
        let child= edge[1];

        graph[parent].push(child);
        inDegree[child]++;
    });

    let source= new Queue();

    for (var i=0;i<inDegree.length;i++) {
        if (inDegree[i] === 0) {
            source.enqueue(i);
        }
    }

    while(source.isEmpty() === false) {
        let vertices= source.dequeue();
        sortedOrder.push(vertices);

        graph[vertices].forEach(function(child) {
            inDegree[child]--;
            if (inDegree[child] === 0) {
                source.enqueue(child);
            }
        });
    }

    // There exists cycle
    if (sortedOrder.length !== vertices) {
        return [];
    }
    return sortedOrder;
}
console.log(`Topological sort: ${
    topological_sort(4, [
    [3, 2],
    [3, 0],
    [2, 0],
    [2, 1],
  ])}`); // 3 2 0 1
