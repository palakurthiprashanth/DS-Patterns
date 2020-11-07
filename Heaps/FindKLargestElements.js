function findKLargestElements (arr, k) {
    let maxHeap= new Maxheap();
    let result= [];

    if (k> arr.length) {
        k= arr.length;
    }

    for (var i=0;i<arr.length;i++) {
        maxHeap.insert(arr[i]);
    }

    while(k >0) {
        result.push(maxHeap.getMax());
        maxHeap.remove();
        k--;
    }
    return result;
}

var a = [9, 4, 7, 1, -2, 6, 5]
var k = 3
console.log(findKLargestElements(a, k)); // 9,7,6
