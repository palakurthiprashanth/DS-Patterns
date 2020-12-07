// https://www.geeksforgeeks.org/find-minimum-maximum-amount-buy-n-candies/

function findMinimum(arr, k) {
    let n= arr.length;
    arr.sort();
    let res= 0;
    for (var i=0;i < n;i++) {
        res+= arr[i];
        // And take k candies for free
        // from the last.
        n= n-k;
    }
    return res;
}

function findMaximum(arr, k) {
    let n= arr.length;
    arr.sort();
    let index= 0;
    let res= 0;
    for (var i = n - 1; i >= index; i--) {
        res+= arr[i];
        // And get k candies for free from
        // the starting
        index += k;
    }
    return res;
}

let prices= [3, 2, 1, 4];
let k=2;

console.log(findMinimum(prices, k), findMaximum(prices, k));// 3, 7
