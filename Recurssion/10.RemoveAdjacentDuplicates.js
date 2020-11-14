function removeDuplicates(string) {
  // Base case
  if (string.length <= 1) {
      return string;
  }

  // Recursive case1
  else if (string[0] == string[1]) {
      return removeDuplicates(string.substr(1));
  }

  // Recursive case2
  return string[0] + removeDuplicates(string.substr(1));
}

// Driver Code
console.log(removeDuplicates('Hellloo')); // Helo
