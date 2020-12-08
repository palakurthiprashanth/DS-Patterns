// https://www.geeksforgeeks.org/maximize-sum-arrii/

function maxSum(arr) {
    arr.sort();
    let n= arr.length;
    let sum= 0;

    for (var i=0;i<n;i++) {
        sum= sum+(arr[i]*i);
    }
    return sum;
}
console.log(maxSum([3, 5, 6, 1])); // 31.
