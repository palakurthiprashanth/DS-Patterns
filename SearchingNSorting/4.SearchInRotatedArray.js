/**
Given an array of numbers which is sorted in ascending order and also rotated by some arbitrary number, find if a given ‘key’ is present in it.

Write a function to return the index of the ‘key’ in the rotated array. If the ‘key’ is not present, return -1. You can assume that the given array 
does not have any duplicates.

Example 1:

Input: [10, 15, 1, 3, 8], key = 15
Output: 1
Explanation: '15' is present in the array at index '1'



Hint.
1. If arr[start] <= arr[middle], the numbers from start to middle are sorted in ascending order.
2. Else, the numbers from middle+1 to end are sorted in ascending order.
**/

function search_rotated_array(arr, key) {
    let start= 0;
    let end= arr.length-1;

    while (start <=end) {
        let midIndex= Math.floor(start + (end-start)/2);

        if (arr[midIndex] === key) {
            return midIndex;
        }

        // we need to find out if key is in first half or in second half [in ascending sorted].

        // first half is in Ascending order
        if (arr[start] <= arr[midIndex]) {
            // check if key is in first half.
            if ( key >= arr[start] && key < arr[midIndex]) {
                end= midIndex-1;
            }else {
                start= midIndex+1;
            }
        }else {// second half is Ascending.
            // check if key is in second half [in ascending sorted].
            if ( key > arr[midIndex] && key <=arr[end]) {
                start= midIndex+1;
            }else {
                end= midIndex-1
            }
        }
    }
    return -1;
}
console.log(search_rotated_array([10, 15, 1, 3, 8], 15)); //1
console.log(search_rotated_array([4, 5, 7, 9, 10, -1, 2], 10)); //4
