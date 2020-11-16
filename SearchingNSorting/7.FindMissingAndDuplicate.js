function findMissingAndDuplicatenumber(arr) {
    let i= 0;

    while (i<arr.length) {
        let targetIndex= arr[i]-1;
        if (arr[i] !== arr[targetIndex]) {
            [arr[i], arr[targetIndex]]= [arr[targetIndex], arr[i]];
        }else {
            i= i+1;
        }
    }

    for (var j=0;j<arr.length;j++) {
        if (arr[j]!==j+1) {
            return [j+1, arr[j]];// missing, duplicate.
        }
    }
}
console.log(findMissingAndDuplicatenumber([1, 4, 4, 3, 2]));// [5, 4]
