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
        if (start === end) {
            return start;
        }
        if (key >arr[midIndex]) {
            start = midIndex+1;
        }else if (key <arr[midIndex]) {
            end= midIndex-1;
        }else {
            return midIndex;
        }
    }
}
console.log(ceilingOfKey([4, 6, 10], 6));//1
console.log(ceilingOfKey([1, 3, 8, 10, 15], 12));//4
console.log(ceilingOfKey([4, 6, 10], 17));//-1
console.log(ceilingOfKey([4, 6, 10], -1));//0

// TC: O(logn).
