// https://www.youtube.com/watch?v=YxuK6A3SvTs
// https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/

function maximumSum(arr) {
    let maximumEndingHere=0;
    let maximumSoFar= Number.MIN_VALUE;

    for (var i=0;i<arr.length;i++) {
        maximumEndingHere= maximumEndingHere+arr[i];
        if (maximumEndingHere < arr[i]) {
            maximumEndingHere= arr[i];
        };
        if (maximumSoFar < maximumEndingHere) {
            maximumSoFar= maximumEndingHere;
        }
    }
    return maximumSoFar;
}
console.log(maximumSum([-2, -3, 4, -1, -2, 1, 5, -3])); //7.
