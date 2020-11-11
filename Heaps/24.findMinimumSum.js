/**
Given an array of digits (values are from 0 to 9), find the minimum possible sum of two numbers formed from digits of the array. All digits of given array 
must be used to form the two numbers.
Examples :

Input: [6, 8, 4, 5, 2, 3]
Output: 604
The minimum sum is formed by numbers 
358 and 246

Input: [5, 3, 0, 7, 4]
Output: 82
The minimum sum is formed by numbers 
35 and 047

**/

function find_minimum_sum(arr) {
    let minHeap= new Heap(function(a, b) {
        return b-a;
    });
    for (var i=0;i<arr.length;i++) {
        minHeap.push(arr[i]);
    }
    // find 2 nos

    let num1= 0;
    let num2= 0;

    while(minHeap.length() >0) {
        num1= (10*num1)+minHeap.pop();
        num2= (10*num2)+minHeap.pop();
    }
    return num1+num2;
}
/**
 * The minimum sum is formed by numbers 
   358 and 246
 * **/
console.log(find_minimum_sum([6, 8, 4, 5, 2, 3]));
