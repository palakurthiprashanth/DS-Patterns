function find_Kth_smallest_number(nums, k) {
    let maxHeap= new Heap(function(a, b) {
        return a-b;
    });

    for (var i=0;i<k;i++) {
        maxHeap.push(nums[i]);
    }

    for (var i=k;i<nums.length;i++) {
        if (nums[i]<maxHeap.peek()) {
            maxHeap.pop();
            maxHeap.push(nums[i]);
        }
    }

    return maxHeap.peek();
}
console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3)}`);// 5

/**
Time complexity

The time complexity of this algorithm is O(K*logK+(N-K)*logK), which is asymptotically equal to O(N*logK).
**/
