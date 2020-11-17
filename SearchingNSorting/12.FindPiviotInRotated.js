// Given sorted rotated array find piviot, piviot is smallest element in array.
// https://www.youtube.com/watch?v=vF7gk4iaklA

function findPivotInRotated(arr) {
    let low= 0;
    let high= arr.length-1;

    while(low<high) {
        let mid= Math.floor(low + (high-low)/2);
        if (arr[mid] < arr[high]) {// mid-high is increasing so pivot is in low to mid
            high= mid;
        }else {
            low= mid+1;
        }
    }

    return arr[high];
}
console.log(findPivotInRotated([5,6,7,1,2,3,4]));// 1

// TC: O(logn).
