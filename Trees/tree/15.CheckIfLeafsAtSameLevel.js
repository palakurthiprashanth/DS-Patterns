// https://thecodingsimplified.com/check-if-all-leaf-nodes-are-at-same-level-in-binary-tree/


function checkIfLeafAtSameLevel(node, level, leafLevel) {
    if (node === null) {
        return true;
    }

    if (node.leftChild === null && node.rightChild === null) {
        if (leafLevel === 0) {
            leafLevel= level;
            return true;
        }
    }

    return checkIfLeafAtSameLevel(node.leftChild, level+1, leafLevel) && checkIfLeafAtSameLevel(node.rightChild, level+1, leafLevel);
}
