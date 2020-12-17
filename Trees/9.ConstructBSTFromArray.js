// https://www.youtube.com/watch?v=qoQE3hAdPFs
function constructBST(arr) {
    arr.sort();
    return constructBSTUtil(arr, 0, arr.length-1);
}

function constructBSTUtil(arr, start, end) {
    let middle= (start + end)/2;
    let root= new TreeNode(middle);
    root.leftChild= constructBST(arr, start, middle-1);
    root.rightChild= constructBST(ARR, middle+1, end);
    return root;
}
