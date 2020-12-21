function find_minimum_depth(root) {
    let queue= new Queue();
    let minDepth= 0;
    queue.enqueue(root);
    debugger;

    while(queue.isEmpty() === false) {
        minDepth= minDepth+1;
        let levelLength= queue.length();

        for (var i=0; i<levelLength; i++) {
            let currentNode= queue.dequeue();
            
            // If we exclude below if condition then it will be max depth
            if (currentNode.leftChild === null && currentNode.rightChild === null) {
                return minDepth;
            }

            if (currentNode.leftChild !==null) {
                queue.enqueue(currentNode.leftChild);
            }

            if (currentNode.rightChild !==null) {
                queue.enqueue(currentNode.rightChild);
            }
        }
    }
}
const root = new TreeNode(12);
root.leftChild = new TreeNode(7);
root.rightChild = new TreeNode(1);
root.rightChild.leftChild = new TreeNode(10);
root.rightChild.rightChild = new TreeNode(5);
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`);// 2.
