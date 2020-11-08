class KthLargestNumberInStream {
    constructor(nums, k) {
        this.minHeap= new Heap(function(a, b) {
            return b-a;
        });

        this.k = k;

        nums.forEach((num) => {
            this.add(num);
        });
    }
    add(num) {
        this.minHeap.push(num);

        if (this.minHeap.length() >this.k) {
            this.minHeap.pop();
        }

        return this.minHeap.peek();
    }
}
const kthLargestNumber = new KthLargestNumberInStream([3, 1, 5, 12, 2, 11], 4);
console.log(`4th largest number is: ${kthLargestNumber.add(6)}`); //5
console.log(`4th largest number is: ${kthLargestNumber.add(13)}`);//6
console.log(`4th largest number is: ${kthLargestNumber.add(4)}`);//6

/**
Time complexity #
The time complexity of the add() function will be O(logK)O(logK) since we are inserting the new number in the heap.

Space complexity #
The space complexity will be O(K)O(K) for storing numbers in the heap.
**/
