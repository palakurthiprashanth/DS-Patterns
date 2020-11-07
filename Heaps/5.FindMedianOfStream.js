class MedianOfAStream {
    constructor() {
        this.maxHeap= new Heap(function(a, b) {
            return a-b;
        });

        this.minHeap= new Heap(function(a, b) {
            return b-a;
        });
    }
    insert_num(num) {
        if (this.maxHeap.length() === 0 || this.maxHeap.peek() >= num) {
            this.maxHeap.push(num);
        }else {
            this.minHeap.push(num);
        }

        //Balance items.
        if (this.maxHeap.length() > this.minHeap.length() +1) {
            this.minHeap.push(this.maxHeap.pop());
        }else if (this.maxHeap.length() < this.minHeap.length()) {
            this.maxHeap.push(this.minHeap.pop());
        }
    }
    find_median() {
        if (this.maxHeap.length() === this.minHeap.length()) {
            return this.maxHeap.peek() / 2.0 + this.minHeap.peek() / 2.0;
        }

        return this.maxHeap.peek();
    }
}
const medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`);//1
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`);//2
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`);//3.5

/**
Time complexity #
The time complexity of the insertNum() will be O(logN) due to the insertion in the heap. 
The time complexity of the findMedian() will be O(1)O(1) as we can find the median from the top elements of the heaps.

Space complexity #
The space complexity will be O(N)O(N) because, as at any time, we will be storing all the numbers.
**/
