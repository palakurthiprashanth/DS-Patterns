https://www.geeksforgeeks.org/minimum-sum-absolute-difference-pairs-two-arrays/#:~:text=It%20consists%20of%20two%20steps,result%20to%20the%20sum%20S.

function findMinSum(arrA, arrB) {
    arrA.sort();
    arrB.sort();
    let sum=0;

    for (var i=0;i < arrA.length;i++) {
        sum= sum+Math.abs(arrA[i]-arrB[i]);
    }

    return sum;
}
console.log(findMinSum([4, 1, 8, 7], [2, 3, 6, 5]));// 6.
