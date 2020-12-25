/**
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
**/

function make_squares(arr) {
    let n= arr.length;
    let squares= Array(n).fill(0);
    let highestSqrIdx= n-1;
    let left= 0;
    let right= n-1;

    while (left <=right) {
        let leftSquare= arr[left]*arr[left];
        let rightSquare= arr[right]*arr[right];

        if (leftSquare > rightSquare) {
            squares[highestSqrIdx]= leftSquare;
            left+=1;
        }else {
            squares[highestSqrIdx]= rightSquare;
            right-=1;
        }
        highestSqrIdx-=1;
    }
    return squares;
}
console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`); // 0,1,4,4,9
