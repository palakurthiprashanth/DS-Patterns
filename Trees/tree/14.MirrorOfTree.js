let mirrorTree = function(root) {
  if (!root) {
    return;
  }

  //  We will do a post-order traversal of the binary tree.
  if (root.left) {
    mirrorTree(root.left);
  }

  if (root.right) {
    mirrorTree(root.right);
  }

  //  Let's swap the left and right nodes at current level.
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
};
