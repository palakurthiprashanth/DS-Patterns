/**
Given an array of n distinct integers sorted in ascending order, write a function that returns a Fixed Point in the array, if there is any Fixed Point 
present in array, else returns -1. Fixed Point in an array is an index i such that arr[i] is equal to i. Note that integers in array can be negative.

Examples:

  Input: arr[] = {-10, -5, 0, 3, 7}
  Output: 3  // arr[3] == 3 
  
**/

function valueEqualToIndex(arr) {
    let start= 0;
    let end= arr.length-1;

    while(start <= end) {
        let midIndex= Math.floor(start + (end-start)/2);

        if (midIndex === arr[midIndex]) {
            return arr[midIndex];
        }else if (midIndex < arr[midIndex]) {
            end= midIndex-1;
        }else if (midIndex > arr[midIndex]) {
            start= midIndex+1;
        }
    }
    return -1;
}

console.log(valueEqualToIndex([-10, -1, 0, 3, 10, 11, 30, 50, 100])); //3.

// TC: O(logn).
