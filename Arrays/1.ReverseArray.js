/**
1) Initialize start and end indexes as start = 0, end = n-1 
2) In a loop, swap arr[start] with arr[end] and change start and end as follows : 
start = start +1, end = end – 1
**/

function reverseArray(arr) {
    let start= 0;
    let end= arr.length-1;

    while(start < end) {
        let temp= arr[start];
        arr[start]= arr[end];
        arr[end]= temp;
        start++;
        end--;
    }
    return arr;
}
console.log(reverseArray([5,4,3,2,1])); // [1,2,3,4,5]
