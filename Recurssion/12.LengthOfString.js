function recursiveLength(testVariable) { 	
	// Base case	
	if (testVariable === "") {
		return 0;
  }

	// Recursive case
	else {
		return 1 + recursiveLength(testVariable.substr(1)); 
  }
}
	
// Driver Code 
testVariable = "Educative";
console.log(recursiveLength(testVariable)); 
