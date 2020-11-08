/**
Input: [1, 3, 12, 5, 15, 11], and K1=3, K2=6
Output: 23
Explanation: The 3rd smallest number is 5 and 6th smallest number 15. The sum of numbers coming
between 5 and 15 is 23 (11+12).
**/



function find_sum_of_elements(nums, k1,k2) {
    let minHeap= new Heap(function(a, b) {
        return b-a;
    });

    // Adding nums to Heap.
    minHeap.addEach(nums);

    // remove 0 to k1 elements;

    for (var i=0;i<k1;i++) {
        minHeap.pop();
    }

    //Add k1 small to k2 small elements.
    let sum= 0;
    for (var i= 0; i<k2-k1-1;i++){
        sum+=minHeap.pop();
    }
    return sum;
}
console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${
  find_sum_of_elements([1, 3, 12, 5, 15, 11], 3, 6)}`);// 23.
