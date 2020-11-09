function findKthSmallestInMatrix(matrix, k) {
    let minHeap= new Heap(function(a, b) {
        return b[0]-a[0];
    });

    for (var i=0;i<matrix.length;i++) {
        minHeap.push([matrix[i][0],0, matrix[i]]);
    }

    let num= 0;
    let numberCount= 0;
    while(minHeap.length() >0) {
        const [number, index, list]= minHeap.pop();
        numberCount+=1;
        num= number;
        if (numberCount === k) {
            break;
        }

        if (list.length > index+1) {
            minHeap.push([list[index+1], index+1, list]);
        }
    }
    return num;
}

console.log(`Kth smallest number is: ${
    findKthSmallestInMatrix([
    [2, 6, 8],
    [3, 7, 10],
    [5, 8, 11],
  ], 5)}`);
