function BfsTraversalTree(root) {
    let queue= new Queue();
    let result= [];

    queue.enqueue(root);

    while(queue.isEmpty() === false) {
        let currentLevel= [];
        let levelLength= queue.length();

        for (var i=0;i<levelLength;i++) {
            let currentNode= queue.dequeue();
            currentLevel.push(currentNode.value);

            if (currentNode.leftChild !==null) {
                queue.enqueue(currentNode.leftChild);
            }

            if (currentNode.rightChild !==null) {
                queue.enqueue(currentNode.rightChild);
            }
        }
        result.push(currentLevel);
        // if we want to reverse the Traversal then result.unshift(currentLevel)
    }
    return result;
}

const root = new TreeNode(12);
root.leftChild = new TreeNode(7);
root.rightChild = new TreeNode(1);
root.leftChild.leftChild = new TreeNode(9);
root.rightChild.leftChild = new TreeNode(10);
root.rightChild.rightChild = new TreeNode(5);
console.log(BfsTraversalTree(root)); // 12,7,1,9,10,5

// TC- O(n).
// SC- O(n).
