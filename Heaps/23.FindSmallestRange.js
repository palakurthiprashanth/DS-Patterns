/**
Given ‘M’ sorted arrays, find the smallest range that includes at least one number from each of the ‘M’ lists.

Example 1:

Input: L1=[1, 5, 8], L2=[4, 12], L3=[7, 8, 10]
Output: [4, 7]
Explanation: The range [4, 7] includes 5 from L1, 4 from L2 and 7 from L3.
**/

function find_smallest_range(lists) {
  let minHeap= new Heap(function(a, b) {
      return b[0]-a[0];
  });
  let currentMax= -Infinity;
  let rangeStart= 0;
  let rangeEnd= Infinity;

  lists.forEach(function(list) {
      minHeap.push([list[0],0,list]);
      currentMax= Math.max(currentMax, list[0]);
  });

  while (minHeap.length() === lists.length) {
      const [number, index, list]= minHeap.pop();
      if (rangeEnd-rangeStart > currentMax-number) {
          rangeStart= number;
          rangeEnd= currentMax;
      }

      if (list.length > index+1) {
          minHeap.push([list[index+1], index+1, list]);
          currentMax= Math.max(currentMax, list[index+1]);
      }
  }
  return [rangeStart, rangeEnd]
}


console.log(`Smallest range is: ${
  find_smallest_range([
    [1, 9, 10],
    [4, 12],
    [7, 8, 10],
  ])}`);
  
  /**
  Time complexity #
Since, at most, we’ll be going through all the elements of all the arrays and will remove/add one element in the heap in each step, the 
time complexity of the above algorithm will be O(N*logM)O(N∗logM) where ‘N’ is the total number of elements in all the ‘M’ input arrays.

Space complexity #
The space complexity will be O(M) because, at any time, our min-heap will be store one number from all the ‘M’ input arrays.
  **/
