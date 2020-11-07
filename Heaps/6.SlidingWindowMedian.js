class SlidingWindowMedian {
    constructor() {
        this.minHeap= new Heap(function(a, b) {
            return b-a;
        });

        this.maxHeap= new Heap(function(a, b) {
            return a-b;
        });
    }
    rebalanceHeaps() {
        if (this.maxHeap.length() > this.minHeap.length() + 1) {
            this.minHeap.push(this.maxHeap.pop());
        }else if (this.minHeap.length() > this.maxHeap().length()) {
            this.maxHeap.push(this.minHeap.pop());
        }
    }
    find_sliding_window_median(nums, k) {
        let result= [];
        for (var i=0;i<nums.length;i++) {
            if (this.maxHeap.length() === 0 || this.maxHeap.peek() >= nums[i]) {
                this.maxHeap.push(nums[i]);
            }else {
                this.minHeap.push(nums[i]);
            }
            // Rebalance Heaps.
            this.rebalanceHeaps();

            // if it exceeds window size or atleast k elements in window.
            if (i >= k-1) {
                if (this.maxHeap.length() === this.minHeap.length()) {
                    result[i-k+1]= this.maxHeap.peek()/2.0 + this.minHeap.peek()/2.0; 
                } else {
                    result[i-k+1]= this.maxHeap.peek();
                }

                // remove exceeded element.
                let elementToBeRemoved= nums[i-k+1];
                 if (this.maxHeap.peek() >= elementToBeRemoved) {
                     this.maxHeap.delete(elementToBeRemoved);
                 }else {
                     this.minHeap.delete(elementToBeRemoved);
                 }
                 this.rebalanceHeaps();
            }
        }
        return result;
    }
}
let slidingWindowMedian = new SlidingWindowMedian();
result = slidingWindowMedian.find_sliding_window_median([1, 2, -1, 3, 5], 2);
console.log(`Sliding window medians are: ${result}`);// 1.5,1,2,3

/**
Time complexity #
The time complexity of our algorithm is O(N*K) where ‘N’ is the total number of elements in the input array and ‘K’ is the size of the sliding window. 
This is due to the fact that we are going through all the ‘N’ numbers and, while doing so, we are doing two things:

Inserting/removing numbers from heaps of size ‘K’. This will take O(logK)
Removing the element going out of the sliding window. This will take O(K) as we will be searching this element in an array of size ‘K’ (i.e., a heap).

Space complexity #
Ignoring the space needed for the output array, the space complexity will be O(K)O(K) because, at any time, we will be storing all the numbers within 
the sliding window.
**/
