function sumTill(targetNumber) {
  // Base case
  if (targetNumber == 1) {
    return targetNumber;
  }

  // Recursive case
  else {
    return targetNumber + sumTill(targetNumber - 1);
  }
}

// Driver Code
var targetNumber = 5;
console.log(sumTill(targetNumber));
