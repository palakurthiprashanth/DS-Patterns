function findKNodes(rootNode, k) {
    var result = [];
    findK(rootNode, k, result);
    return result;
}

//Helper recursive function to traverse tree and push all the nodes at "k" distance into "result" array
function findK(rootNode, k, result) {
    if (rootNode == null)
        return
    if (k == 0)
        result.push(rootNode.val)
    else {
        //Decrement k at each step till you reach at the leaf node
        //or when k == 0 then push the Node's data into result 
        findK(rootNode.leftChild, k - 1, result)
        findK(rootNode.rightChild, k - 1, result)
    }
}
