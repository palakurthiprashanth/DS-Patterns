/**
Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s 
sorted in ascending or descending order. You should assume that the array can have duplicates.

Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

Example 1:

Input: [4, 6, 10], key = 10
Output: 2

**/

function orderAgnosticBinarySearch(arr, key) {
    let start= 0;
    let end= arr.length-1;
    let isAscending= arr[start]<arr[end];

    while(start<=end) {
        let midIndex= Math.floor(start + (end-start)/2);

        if (key === arr[midIndex]) {
            return midIndex
        }else if (isAscending) {
            if (key < arr[midIndex]) {
                end= midIndex-1;
            }else {
                start= midIndex+1;
            }
        }else {
            if (key < arr[midIndex]) {
                start= midIndex+1;
            }else {
                end= midIndex-1;
            }
        }
    }
    return -1;
}
console.log(orderAgnosticBinarySearch([1, 2, 3, 4, 5, 6, 7], 5)); //4
console.log(orderAgnosticBinarySearch([10, 6, 4], 10));// 0
