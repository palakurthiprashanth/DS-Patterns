/**
Given an array of numbers sorted in ascending order, find the element in the array that has the minimum difference with the given ‘key’.

Example 1:

Input: [4, 6, 10], key = 7
Output: 6
Explanation: The difference between the key '7' and '6' is minimum than any other number in the array 

Example 2:

Input: [4, 6, 10], key = 4
Output: 4
**/

function search_min_diff_element(arr, key) {
    if (key <arr[0]) {
        return arr[0];
    }
    let start= 0;
    let end= arr.length-1;

    while(start <=end) {
        let midIndex= Math.floor(start+(end-start)/2);

        if (key <arr[midIndex]) {
            end= midIndex-1;
        }else if (key > arr[midIndex]) {
            start= midIndex+1;
        }else {
            return arr[midIndex];
        }
    }

    if (arr[start] -key < key-arr[end]) {
        return arr[start];
    }
    return arr[end];
}
console.log(search_min_diff_element([4, 6, 10], 7));//6
console.log(search_min_diff_element([4, 6, 10], 4));//4
console.log(search_min_diff_element([1, 3, 8, 10, 15], 12));//10
console.log(search_min_diff_element([4, 6, 10], 17));//10
