// Count all occurances of a key in array.

function count(myArray, key) {
  // Base case
  if (myArray.length == 0) {
    return 0;
  }

  // Recursive case1
  if (myArray[0] == key) {
    return 1 + count(myArray.slice(1), key);
  }

  // Recursive case2
  else {
    return 0 + count(myArray.slice(1), key);
  }
}

// Driver Code
myArray = [1, 2, 1, 4, 5, 1];
key  = 1;
console.log(count(myArray, key));
