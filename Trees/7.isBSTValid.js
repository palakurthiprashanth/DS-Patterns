// https://www.youtube.com/watch?v=TKvbwPIOGCM&t=265s

function isBST(tree) {
    return BSTUtil(tree, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

function BSTUtil(root, min, max) {
    // An empty tree is BST
    if (root === null) {
        return true;
    }

    if (root.value < min || root.value > max) {
        return false;
    }
    return BSTUtil(root.leftChild, min, root.value) && BSTUtil(root.rightChild, root.value, max);
}
let  tree = new BinarySearchTree(); 
tree.root = new TreeNode(4); 
tree.root.leftChild = new TreeNode(2); 
tree.root.rightChild = new TreeNode(5); 
tree.root.leftChild.leftChild = new TreeNode(1); 
tree.root.leftChild.rightChild = new TreeNode(3); 
        
console.log(isBST(tree.root));// true
