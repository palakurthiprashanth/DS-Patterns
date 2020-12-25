/**
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the 
sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:

Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.

**/

function triplet_sum_close_to_target(arr,targetSum) {
        arr.sort(function(a,b) {
            return a-b;
        });
        let small = Number.POSITIVE_INFINITY;
        let closest = Number.POSITIVE_INFINITY;

        for (var i=0;i <arr.length-2;i++) {
            let left = i+1;
            let right = arr.length-1;

            while(left < right) {
                let tripletSum = arr[i]+arr[left]+arr[right];
                let targetDiff = targetSum - tripletSum;
                if (targetDiff === 0) {
                    return tripletSum;
                }
                if (Math.abs(targetDiff) < Math.abs(small)) {
                    small = targetDiff;
                    closest = tripletSum;
                }

                if (tripletSum < targetSum) {
                    left++
                }else {
                    right--;
                }
            }
        }
        return closest;
    }
   console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));// 1
   console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));// 0
   console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));// 3
