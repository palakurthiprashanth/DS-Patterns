/**
Suppose on the first row, we have a 0. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 by 01, and each occurrence of 
1 by 10. Suppose we have N rows and index K, we have to find the K-th indexed symbol in row N. (The values of K are 1-indexed.) (1 indexed). 
So if N = 4 and K = 5, then the output will be 1. This is because

Row 1: 0
Row 2: 01
Row 3: 0110
Row 4: 01101001
To solve this, we will follow these steps.

**/

function kthGrammer (n,k) {

    // Base condition.

    if (n===1 && k===1) {
        return 0;
    };

    let length = Math.pow(2,n-1);
    let mid = Math.floor(length/2);

    if (k <=mid) {
        return kthGrammer(n-1,k);
    }else {
        if (kthGrammer(n-1, k-mid) ===0) {
            return 1;
        }else {
            return 0;
        }
    }
}
