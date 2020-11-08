function find_k_largest_numbers(nums, k) {
    let minHeap= new Heap(function(a, b) {
        return b-a;
    });

    // put first k elements in Heap , so root is always minimum.
    for (var i=0;i<k;i++) {
        minHeap.push(nums[i]);
    }

    // go through the remaining numbers of the array, if the number from the array is bigger than the
    // top(i.e., smallest) number of the min-heap, remove the top number from heap and add the number from array
    for (var i=k;i<nums.length;i++) {
        if (nums[i]>minHeap.peek()) {
            minHeap.pop();
            minHeap.push(nums[i]);
        }
    }

    return minHeap.toArray();
}
console.log(`Here are the top K numbers: ${find_k_largest_numbers([3, 1, 5, 12, 2, 11], 3)}`); // 5,12,11
console.log(`Here are the top K numbers: ${find_k_largest_numbers([5, 12, 11, -1, 12], 3)}`);// 11,12,12

/**
It will take us O(logK) to extract the minimum number from the min-heap. So the overall time complexity of our algorithm will be
O(K*logK+(N-K)*logK)since, first, we insert ‘K’ numbers in the heap and then iterate through the remaining numbers and at every step, 
in the worst case, we need to extract the minimum number and insert a new number in the heap. This algorithm is better than O(N*logN.
**/
