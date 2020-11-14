function sumDigits(testVariable) {
  // Base case
  if (testVariable === "") {
    return 0;
  }

  // Recursive case 
  else {
    return Number(testVariable[0]) + sumDigits(testVariable.substr(1));
  }
}

// Driver Code
myString = "345";
console.log(sumDigits(myString));
