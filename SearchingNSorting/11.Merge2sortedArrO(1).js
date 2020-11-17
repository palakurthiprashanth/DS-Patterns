// https://www.techiedelight.com/inplace-merge-two-sorted-arrays/
// https://www.youtube.com/watch?v=hVl2b3bLzBw

function mergeSortArrays(arr1, arr2) {
    let l1= arr1.length;
    let l2= arr2.length;

    for (var i=0;i<l1;i++) {
        if (arr1[i] > arr2[0]) {
            let temp= arr1[i];
            arr1[i]= arr2[0];
            arr2[0]= temp;

            let first= arr2[0];
            // move Y[0] to its correct position to maintain sorted
			// order of Y[]. Note: Y[1..n-1] is already sorted
            for (var k=1; k<l2 && arr2[k]<first;k++) {
                arr2[k-1]= arr2[k];
            }
            arr2[k-1]= first;
        }
    }
    return [...arr1, ...arr2]
}


let  X = [ 1, 4, 7, 8, 10 ];
let Y = [ 2, 3, 9 ];
console.log(mergeSortArrays(X,Y));
