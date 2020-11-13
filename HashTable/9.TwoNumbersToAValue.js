function findSum(arr, value) {
  let found_values = new HashTable();
  var results=[];
  for (let i in arr) {

    if (found_values.search(value - arr[i]) != null) {
       results.push(value-arr[i]);
       results.push(arr[i]);
       return results; 
    }
    
    found_values.insert(arr[i],1);
    
  }

  return false;
};



console.log(findSum([1,2,4],5)). // [1,4].
console.log(findSum([1,2,3,4],10))// false.

/**
Time Complexity #
As the array is always iterated once, the time complexity for this algorithm will be O(n). This also implies that this is the best solution for this challenge.
**/
