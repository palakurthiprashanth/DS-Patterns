// In-Order traversal gives in Ascending Order.

function findKthMax(rootNode,k)
{
  var tree = []
  tree=inOrderTraverse(rootNode, tree);
  console.log(tree);
  if(((tree.length)-k) >=0 && k>0)
  { 
    return tree[tree.length-k]
  }
  return null;
}
//Helper recursive function to traverse the tree inorder
function inOrderTraverse(rootNode,tree)
{
  if( rootNode !== null)
  {
    tree=inOrderTraverse(rootNode.leftChild,tree)
    tree.push(rootNode.val)
    tree=inOrderTraverse(rootNode.rightChild,tree)
  }
  
  return tree;
}

// TC- O(N)>
