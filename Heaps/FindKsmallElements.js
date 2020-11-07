function findKSmallestElements (arr, k) {
    let minHeap= new MinHeap();
    let result= [];

    if (k> arr.length) {
        k= arr.length;
    }

    for (var i=0;i<arr.length;i++) {
        minHeap.insert(arr[i]);
    }

    while(k >0) {
        result.push(minHeap.getMin());
        minHeap.remove();
        k--;
    }
    return result;
}

var a = [9, 4, 7, 1, -2, 6, 5]
var k = 3
console.log(findKSmallestElements(a, k)); // -2,1,4

/**
TC: 
For creating min heap O(N);
For Inserting O(Mlog N), so O(N + M log N)
**/
