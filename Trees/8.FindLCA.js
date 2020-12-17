// https://www.youtube.com/watch?v=PZ0E1nXAWMo

function LCA (node, n1, n2) {
    while(node!==null) {
        if (node.value < n1 && node.value <n2) {
            node= node.leftChild;
        }else if (node.value > n1 && node.value >n2) {
            node= node.rightChild;
        }else {
            break;
        }
    }
    return node;
}
