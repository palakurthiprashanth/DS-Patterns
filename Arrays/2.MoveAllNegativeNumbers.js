/**
https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/

The idea is to solve this problem with constant space and linear time is by using a two-pointer or two-variable approach where we simply take two variables
like left and right which hold the 0 and N-1 indexes. Just need to check that :

Check If the left and right pointer elements are negative then simply increment the left pointer.
Otherwise, if the left element is positive and the right element is negative then simply swap the elements, and Simultaneously increment or decrement the left and right pointers.
Else if the left element is positive and the right element is also positive then simply decrement the right pointer.
Repeat the above 3 steps until the left pointer ≤ right pointer.
**/

function shiftAllNegitive(arr) {
    let left= 0;
    let right= arr.length-1;

    while(left<=right) {
        // If left is negitive then no swap required.
        if (arr[left] < 0 && arr[right] <0) {
            left++;
        }
        if (arr[left]<0 && arr[right]>0) {
            left++;
            right--;
        }

        // If left is positive then no swap required.
        if (arr[left]>0 && arr[right]<0) {
            let temp= arr[left];
            arr[left]= arr[right];
            arr[right]= temp;
            left++;
            right--;
        }
        if (arr[left]>0 && arr[right]>0) {
            right--;
        }

    }
    return arr;
}
console.log(shiftAllNegitive([-12, 11, -13, -5, 6, -7, 5, -3, 11])); // [-12, -3, -13, -5, -7, 6, 5, 11, 11];
