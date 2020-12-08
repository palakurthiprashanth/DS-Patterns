// https://www.geeksforgeeks.org/maximize-array-sun-after-k-negation-operations/

function maximiseSumAfterKNegations(arr, k) {
    arr.sort();

    let sum= 0;
    let i= 0;

    while(k >0) {
        if (arr[i] ===0) {
            k=0; // if elem is zero we will negate it till remaining no of times.
        }else {
            arr[i]= (-1)*arr[i];
            k= k-1;
        }
        i++;
    }

    for (var j=0;j< arr.length;j++) {
        sum= sum+arr[j];
    }
    return sum;
}
console.log(maximiseSumAfterKNegations([-2, 0, 5, -1, 2], 4));// 10
