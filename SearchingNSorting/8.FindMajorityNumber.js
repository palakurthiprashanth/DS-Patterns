/**
Write a function which takes an array and prints the majority element (if it exists), otherwise prints “No Majority Element”. A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element). 

Examples : 

Input : {3, 3, 4, 2, 4, 4, 2, 4, 4}
Output : 4
Explanation: The frequency of 4 is 5 which is greater
than the half of the size of the array size. 

https://www.youtube.com/watch?v=n5QY3x_GNDg

**/

function findMajorityNumber(arr) {
    let candidate= findCandidate(arr);
    let isMajority= checkMajority(arr, candidate);

    return isMajority;
}

function findCandidate(arr) {
    let maj_index= 0;
    let count= 1;

    for (var i=1;i<arr.length;i++) {
        if (arr[i] === arr[maj_index]) {
            count++;
        }else {
            count--;
        }

        if (count === 0) {
            maj_index= i;
            count= 1;
        }
    }
    return arr[maj_index]
}

function checkMajority(arr, num) {
    let count= 0;
    for (var i=0; i<arr.length;i++) {
        if (arr[i]===num) {
            count++;
        }
    }
    if (count > (arr.length/2)) {
        return num;
    }
    return "No Majority Number.";
}
console.log(findMajorityNumber([1,3, 3, 3, 1]));
