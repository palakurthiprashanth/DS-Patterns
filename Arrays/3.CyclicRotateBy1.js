/**
Given an array, cyclically rotate the array clockwise by one.

Examples:

Input:  arr[] = {1, 2, 3, 4, 5}
Output: arr[] = {5, 1, 2, 3, 4}

Following are steps.
1) Store last element in a variable say x.
2) Shift all elements one position ahead.
3) Replace first element of array with x.

**/

function cyclicRotateByOne(arr) {
    let last= arr[arr.length-1];
    for (var i= arr.length-1; i>0;i--) {
        arr[i]= arr[i-1];
    }
    arr[0]= last
    return arr;
}
console.log(cyclicRotateByOne([1,2,3,4,5])); // 5, 1, 2, 3, 4
