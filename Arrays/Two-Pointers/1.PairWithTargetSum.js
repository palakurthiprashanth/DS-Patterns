/**
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

Example 1:

Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

**/

function pair_with_target_sum(arr, targetSum) {
    let start= 0;
    let end= arr.length-1;

    while(start <end) {
        let sum= arr[start] + arr[end];
        if (sum === targetSum) {
            return [start, end];
        }

        if (sum > targetSum) {
            end= end-1;
        }else {
            start= start+1;
        }
    }
    return [-1,-1];
}
console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));// [ 1, 3 ]
