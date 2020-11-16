/**
Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. The range of the ‘key’ will be the first and last position of the 
‘key’ in the array.

Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

Example 1:

Input: [4, 6, 6, 6, 9], key = 6
Output: [1, 3]

**/

function findNumberRange(arr, key) {
    let result= [-1, -1];
    result[0]= binarySearchRange(arr, key, false);
    if (result[0]!== -1) {
        result[1]= binarySearchRange(arr, key, true);
    }
    return result;
}

function binarySearchRange(arr, key, findMaxIndex) {
    let keyIndex= -1;
    let start= 0;
    let end= arr.length-1;

    while(start<=end) {
        let mid= Math.floor(start + (end-start)/2);
        if (key < arr[mid]) {
            end= mid-1;
        }else if(key >arr[mid]) {
            start= mid+1;
        }else {
            keyIndex= mid;
            if (findMaxIndex) {
                start= mid+1; // search in next half for max.
            }else {
                end= mid-1; // search in 1st half for min.
            }
        }
    }
    return keyIndex;
}
console.log(findNumberRange([4, 6, 6, 6, 9], 6));// [1,3]
console.log(findNumberRange([1, 3, 8, 10, 15], 10));//[3,3].

/**
TC: O(logn).
SC: O(1). constant space complexity.
**/
