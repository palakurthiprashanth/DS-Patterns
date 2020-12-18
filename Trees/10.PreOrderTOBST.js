// https://thecodingsimplified.com/create-bst-from-given-preorder-traversal/

function createBSTPreOrder(preOrderArr, start, end) {
    if (start > end) {
        return null;
    }
    let node= new TreeNode(preOrderArr[start]);
    var i;
    for (i= start+1;i<=end;i++) {
        if (preOrderArr[i] > node.value) {
            break;
        }
    }
    node.leftChild= createBSTPreOrder(preOrderArr, start+1, i-1);
    node.rightChild= createBSTPreOrder(preOrderArr, i, end);
    return node;
}

let ar= [10, 5, 1, 7, 40, 50];
let bt= new BinarySearchTree();
bt.root= createBSTPreOrder(ar, 0, ar.length-1);
bt.inOrderPrint(bt.root); // 1, 5, 7, 10, 40, 50.
