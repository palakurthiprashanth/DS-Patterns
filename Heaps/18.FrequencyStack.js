class FrequencyStack {
    constructor() {
        this.freqMap= {};
        this.maxHeap= new Heap(function(a, b) {
            return a[0]-b[0];
        });
    }
    push(number) {
        if (number in this.freqMap) {
            this.freqMap[number]++;
        }else {
            this.freqMap[number]= 1;
        }

        this.maxHeap.push([this.freqMap[number], number]);
    }
    pop() {
        let num= this.maxHeap.pop()[1];
        this.freqMap[num]-=1;
        if (this.freqMap[num] === 0) {
            delete this.freqMap[num];
        }
        return num;
    }
}
const frequencyStack = new FrequencyStack();
frequencyStack.push(1);
frequencyStack.push(2);
frequencyStack.push(3);
frequencyStack.push(2);
frequencyStack.push(1);
frequencyStack.push(2);
frequencyStack.push(5);
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());
console.log(frequencyStack.pop());

/**
Time complexity #
The time complexity of push() and pop() is O(logN) where ‘N’ is the current number of elements in the heap.

Space complexity #
We will need O(N)O(N) space for the heap and the map, so the overall space complexity of the algorithm is O(N).
**/
