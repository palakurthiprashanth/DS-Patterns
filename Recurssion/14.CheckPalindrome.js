function isPalindrome(testVariable) {
  // Base case
  if (testVariable.length <= 1) { // Strings that have length 1 or 0 are palindrome
      return true;
  }

  // Recursive case
  else if (testVariable[0] == testVariable[testVariable.length - 1]) { // compare the first and last elements
      return isPalindrome(testVariable.substring(1, testVariable.length - 1));
  }

  return false;
}

// Driver Code
console.log(isPalindrome("madam"));
