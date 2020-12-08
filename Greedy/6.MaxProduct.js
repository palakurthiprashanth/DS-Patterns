// https://www.geeksforgeeks.org/maximum-product-subset-array/

function maxProductSubset(arr) {
    let n= arr.length;

    if (n === 1) {
        return arr[0];
    }

    let countZero= 0;
    let countNegitive= 0;
    let maxNeg= Number.NEGATIVE_INFINITY;
    let product=1;

    for (var i=0;i<n;i++) {
        if (arr[i] === 0) {
            countZero++;
            continue;
        }
        if (arr[i] <0) {
            countNegitive++;
            maxNeg= Math.max(maxNeg, arr[i]);
        }
        product= product*arr[i];
    }

    if (countZero === n) {
        return 0;
    }

    if (countNegitive %2 !==0) {
        product= product/maxNeg;
    }
    return product;
}
console.log(maxProductSubset([-2,2,3]));// 6
