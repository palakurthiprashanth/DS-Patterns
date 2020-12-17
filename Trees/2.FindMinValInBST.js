function findMin(rootNode)
{
  if(rootNode == null)
    return null;
  else if(rootNode.leftChild == null)
      return rootNode.val
  else
    return findMin(rootNode.leftChild)
}  
var BST = new BinarySearchTree(6)
BST.insertBST(20)
BST.insertBST(-1)

// TC- O(h) - h=>height of tree.
