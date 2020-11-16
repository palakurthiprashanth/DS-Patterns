function cyclicSort(arr) {
    let i= 0;
    while(i<arr.length) {
        let targetIndex= arr[i]-1;
        if (arr[i] !== arr[targetIndex]) {
            [arr[i], arr[targetIndex]]= [arr[targetIndex], arr[i]];// swapping to correct position.
        }else {
            i= i+1;
        }
    }
    return arr;
}
console.log(cyclicSort([3, 1, 5, 4, 2])); //[1,2,3,4,5];

// TC: O(n).
