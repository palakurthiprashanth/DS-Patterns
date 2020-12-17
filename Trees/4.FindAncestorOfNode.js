function findAncestors(rootNode, k) {
    var result = []
    recfindAncestors(rootNode, k, result)
    return result;
}

function recfindAncestors(rootNode, k, result) {
    if (rootNode == null) {
        return false;
    } else if (rootNode.value == k) {
        return true;
    } else if ((recfindAncestors(rootNode.leftChild, k, result)) || (recfindAncestors(rootNode.rightChild, k, result))) {
        result.push(rootNode.value)
        return true;
    }
    return false;
}
var BST = new BinarySearchTree(6)
BST.insert(1)
BST.insert(133)
BST.insert(12)
console.log(findAncestors(BST.root,12)) // 133, 6

// TC- O(N).
