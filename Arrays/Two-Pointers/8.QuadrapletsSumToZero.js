/**
Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

Example 1:

Input: [4, 1, 2, -1, 1, -3], target=1
Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
Explanation: Both the quadruplets add up to the target.
Example 2:

Input: [2, 0, -1, 1, -2, 2], target=2
Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
Explanation: Both the quadruplets add up to the target.

**/

/**
We can follow a similar approach to iterate through the array, taking one number at a time. At every step during the iteration, 
we will search for the quadruplets similar to Triplet Sum to Zero whose sum is equal to the given target.
**/

function search_quadruplets (arr,target) {
       arr.sort(function(a,b) {
           return a-b;
       });
       let quadraplets =[];
       for (var i=0;i<arr.length-3;i++) {
           for (var j=i+1;j<arr.length-2;j++) {
               search_pairs(arr,target,i,j,quadraplets);
           }
       }
       return quadruplets;
   }
   function search_pairs(arr,target,first,second,quadraplets) {
       let left = second+1;
       let right = arr.length-1

       while (left < right) {
          let sum = arr[first]+arr[second]+arr[left]+arr[right];
          if (sum === target) {
              quadraplets.push(arr[first],arr[second],arr[left],arr[right]);
              left++;
              right--;
          }else if (sum < target) {
              left++;
          }else {
              right--;
          }
       }
   }
   
   // TC: O(N^3).
