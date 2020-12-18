function deadEnd(root, min=1, int max=INT_MAX) { 
    // if the root is null or the recursion moves 
    // after leaf node it will return false 
    // i.e no dead end. 
    if (!root) 
        return false; 
  
    // if this occurs means dead end is present. 
    if (min == max) 
        return true; 
  
    // heart of the recursion lies here. 
    return deadEnd(root.left, min, root.value - 1) || 
           deadEnd(root.right, root.value + 1, max); 
} 
 
