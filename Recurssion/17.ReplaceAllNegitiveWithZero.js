function replace(array, currentIndex) {
  if (currentIndex < array.length) {
    if (array[currentIndex] < 0) {
      array[currentIndex] = 0;
    }

    replace(array, currentIndex + 1);
  }

  return;
}
  
// Driver Code
array = [2, -3, 4, -1, -7, 8];
console.log("Original Array --> " + array);

replace(array, 0);
console.log("Modified Array --> " + array);
