function reverse(array) {
  // Base case1
  if (array.length == 0) { // If we encounter an empty array, simply return an empty array
    return [];
  }
  
  // Base case2
  else if (array.length == 1) { // Reversing an array of size 1 returns the same array
   return array;
  }

  // Recursive case
  return [array[array.length - 1]].concat(reverse(array.slice(0, array.length - 1)));
  // The first part is storing the last element to be appended later
  // The second part is calling another instance of the same function with the last element removed

}
// Driver Code
array = [1, 2, 3, 4];
console.log(reverse(array));
