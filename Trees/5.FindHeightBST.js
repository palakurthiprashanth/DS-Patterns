function findHeight(currentNode) {
    if (currentNode === null) {
        return 0;
    }else if (currentNode.leftChild === null && currentNode.rightChild===null) {
        return 0;
    }else {
        let leftHeight = findHeight(currentNode.leftChild);
        let rightHeight = findHeight(currentNode.rightChild);
        if (leftHeight > rightHeight) {
            return leftHeight+1;
        }else {
            return rightHeight+1;
        }
    }
}
