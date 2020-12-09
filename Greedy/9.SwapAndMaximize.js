function maximumSum(arrA,arrB, k) {
    arrA.sort();
    arrB.sort();
    let n= arrA.length;

    for (var i=0,j=n-1;i<k; i++,j--) {
        if (arrA[i] < arrB[j]) {
            let temp= arrA[i];
            arrA[i]= arrB[j];
            arrB[j]= temp;
        }else {
            break;
        }
    }
    // calculating sum.
    let sum= 0;
    for (var i=0;i<n;i++) {
        sum= sum+arrA[i];
    }
    return sum;
}
let m = 1; 
let A = [ 2, 3, 4 ]; 
let B = [ 6, 8, 5 ]; 
console.log(maximumSum(A, B, m));// 15.

// Time Complexity: O(N * log N)
