/**
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are 
three different indices. Write a function to return the count of such triplets.

Example 1:

Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
Example 2:

Input: [-1, 4, 2, 1, 3], target=5 
Output: 4
Explanation: There are four triplets whose sum is less than the target: 
   [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
   
**/

function triplet_with_smaller_sum (arr, targetSum) {
        arr.sort();
        let count =0;
        for (var i=0;i<arr.length-2;i++) {
            let left= i+1;
            let right = arr.length-1;
           while(left <right) {
            let tripletSum = arr[i]+arr[left]+arr[right];
            if (tripletSum < targetSum) {
                count += right-left; // everything before right.
                left++;
            }else{
                right--;
            }
        }
    }
    return count;
}
console.log(triplet_with_smaller_sum([-1, 0, 2, 3], 3)); // 2
console.log(triplet_with_smaller_sum([-1, 4, 2, 1, 3], 5)); // 4

/**
will take O(N * logN + N^3)O(N∗logN+N​3), which is asymptotically equivalent to O(N^3)O(N​3).
**/
