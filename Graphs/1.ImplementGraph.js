class Graph {
    constructor(vertices) {
        this.vertices= vertices;
        this.list= [];

        for (var i=0;i<vertices;i++) {
            let temp= new LinkedList();
            // Each vertex is a linkedlist.
            this.list.push(temp);
        }
    }
    addEdge(source, destination) {
        if (source < this.vertices && destination < this.vertices) {
            this.list[source].insertAtHead(destination);
            // If undirected Graph
            // this.list[destination].insertAtHead(source);
        }
    }
    deleteEdge(source, destination) {
        if (source < this.vertices && destination < this.vertices) {
            this.list[source].deleteVal(destination);
        }
        return;
    }
    printGraph() {
        let result= "";
        for (var i=0;i<this.list.length;i++) {
            result+="||"+i+"||";
            let head= this.list[i].getHead();
            while(head!==null) {
                result+="=>"+head.data;
                head= head.nextElement;
            }
            result+="=>"+null;
            console.log(result);
            result= "";
        }
    }
}
let g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.printGraph();
