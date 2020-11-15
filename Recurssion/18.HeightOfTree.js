function heightOfTree(node) {

    // Base
    if (node === null) {
        return 0;
    }

    // Hypothesis
    let leftHeight = heightOfTree(node.left);
    let rightHeight = heightOfTree(node.right);

    // Induction
    return 1+Math.max(leftHeight, rightHeight);
}
