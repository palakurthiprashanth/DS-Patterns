function find_Kth_smallest(lists, k) {
  let minHeap= new Heap(function(a, b) {
      return b[0]-a[0];
  });

  // put 1st element in each array to min heap.
  for (var i=0;i<lists.length;i++) {
      minHeap.push([lists[i][0], 0, lists[i]]);
  }

  let numberCount= 0;
  let num= 0;
  while(minHeap.length() >0) {
      const [number, index, list]= minHeap.pop();
      num= number;
      numberCount+=1;
      if (numberCount === k) {
          break;
      }

      // If list has next value
      if (list.length > index+1) {
          minHeap.push([list[index+1], index+1, list]);
      }
  }
  return num;
}


console.log(`Kth smallest number is: ${find_Kth_smallest([
  [2, 6, 8],
  [3, 6, 7],
  [1, 3, 4],
], 5)}`); // 4.


/**
Time complexity #
Since we’ll be going through at most ‘K’ elements among all the arrays, and we will remove/add one element in the heap in each step, the time complexity of the above algorithm will be O(K*logM)O(K∗logM) where ‘M’ is the total number of input arrays.

Space complexity #
The space complexity will be O(M)O(M) because, at any time, our min-heap will be storing one number from all the ‘M’ input arrays.
**/
