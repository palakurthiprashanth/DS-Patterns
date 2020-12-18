function getCount(root, low, high) 
{ 
    // Base case 
    if (!root) return 0; 
  
    // Special Optional case for improving efficiency 
    if (root.value == high && root.value == low) 
        return 1; 
  
    // If current node is in range, then include it in count and 
    // recur for left and right children of it 
    if (root.value <= high && root.value >= low) 
         return 1 + getCount(root.leftChild, low, high) + 
                    getCount(root.rightChild, low, high); 
  
    // If current node is smaller than low, then recur for right 
    // child 
    else if (root.value < low) 
         return getCount(root.rightChild, low, high); 
  
    // Else recur for left child 
    else return getCount(root.leftChild, low, high); 
} 
