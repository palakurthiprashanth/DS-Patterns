function gcd(testVariable1, testVariable2) {
  // Base case
  if (testVariable1 == testVariable2) {
    return testVariable1;
  }

  // Recursive case
  if (testVariable1 > testVariable2) {
    return gcd(testVariable1 - testVariable2, testVariable2);
  }

  else {
    return gcd(testVariable1, testVariable2 - testVariable1);
  }
}

// Driver Code
var number1 = 6;
var number2 = 9;
console.log(gcd(number1, number2));
