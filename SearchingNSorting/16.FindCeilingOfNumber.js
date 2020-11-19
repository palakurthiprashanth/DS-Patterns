/**
Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in 
the given array greater than or equal to the ‘key’.

Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.

Example 1:

Input: [4, 6, 10], key = 6
Output: 1
Explanation: The smallest number greater than or equal to '6' is '6' having index '1'.
Example 2:

Input: [1, 3, 8, 10, 15], key = 12
Output: 4
Explanation: The smallest number greater than or equal to '12' is '15' having index '4'.

**/

function ceilingOfKey(arr, key) {
    let start= 0;
    let end= arr.length-1;

    if (key > arr[end]) {
        return -1;
    }

    while (start <=end) {
        let midIndex= Math.floor(start+(end-start)/2);
        if (key >arr[midIndex]) {
            start = midIndex+1;
        }else if (key <arr[midIndex]) {
            end= midIndex-1;
        }else {
            return midIndex;
        }
    }
    return start;
}
console.log(ceilingOfKey([4, 6, 10], 6));//1
console.log(ceilingOfKey([1, 3, 8, 10, 15], 12));//4
console.log(ceilingOfKey([4, 6, 10], 17));//-1
console.log(ceilingOfKey([4, 6, 10], -1));//0

// TC: O(logn).



// floor of a number.
function search_floor_of_a_number(arr, key) {
  if (key < arr[0]) { // if the 'key' is smaller than the smallest element
    return -1;
  }

  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else { // found the key
      return mid;
    }
  }

  // since the loop is running until 'start <= end', so at the end of the while loop, 'start === end+1'
  // we are not able to find the element in the given array, so the next smaller number will be arr[end]
  return end;
}


console.log(search_floor_of_a_number([4, 6, 10], 6));
console.log(search_floor_of_a_number([1, 3, 8, 10, 15], 12));
console.log(search_floor_of_a_number([4, 6, 10], 17));
console.log(search_floor_of_a_number([4, 6, 10], -1));
