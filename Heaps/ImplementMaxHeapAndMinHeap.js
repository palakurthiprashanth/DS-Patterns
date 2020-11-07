class Maxheap {
    constructor() {
        this.heap= [];
        this.elements= 0;
    }
    insert(value) {
        this.elements= this.elements+1;
        this.heap.push(value);
        this.__percolateUp(this.elements-1);
    }
    __percolateUp(childIndex) {
        let parentIndex= Math.floor((childIndex-1)/2);

        if (this.heap[childIndex] > this.heap[parentIndex]) {
            let temp= this.heap[parentIndex];
            this.heap[parentIndex]= this.heap[childIndex];
            this.heap[childIndex]= temp;
            this.__percolateUp(parentIndex);
        }
    }
    // Always removes root and replaces last value.
    remove() {
        let max= this.heap[0];
        this.heap[0]= this.heap[this.elements-1]; // replaces last value.
        this.elements= this.elements-1;
        this.__maxHeapify(0);
        return max;
    }
    __maxHeapify(parentIndex) {
        let left= (2*parentIndex)+1;
        let right= (2*parentIndex)+2;
        let largest= parentIndex;

        if (this.heap[left] > this.heap[parentIndex]) {
            largest= left;
        }

        if (this.heap[right] > this.heap[left]) {
            largest= right;
        }

        if (largest!==parentIndex) {
            let temp= this.heap[parentIndex];
            this.heap[parentIndex]= this.heap[largest];
            this.heap[largest]= temp;
            this.__maxHeapify(largest);
        }
    }
    getMax() {
        return this.heap[0];
    }
}

let h= new Maxheap();
h.insert(1);
h.insert(10);
h.insert(5);
h.insert(25);
h.insert(0);
console.log(h.getMax());//25
h.remove();
console.log(h.getMax());//10


class MinHeap {
    constructor() {
        this.heap= [];
        this.elements= 0;
    }
    insert(value) {
        this.elements= this.elements+1;
        this.heap.push(value);
        this.__percolateUp(this.elements-1);
    }
    __percolateUp(childIndex) {
        let parentIndex= Math.floor((childIndex-1)/2);

        if (this.heap[childIndex] < this.heap[parentIndex]) {
            let temp= this.heap[parentIndex];
            this.heap[parentIndex]= this.heap[childIndex];
            this.heap[childIndex]= temp;
            this.__percolateUp(parentIndex);
        }
    }
    // Always removes root and replaces last value.
    remove() {
        let max= this.heap[0];
        this.heap[0]= this.heap[this.elements-1]; // replaces last value.
        this.elements= this.elements-1;
        this.__maxHeapify(0);
        return max;
    }
    __maxHeapify(parentIndex) {
        let left= (2*parentIndex)+1;
        let right= (2*parentIndex)+2;
        let smallest= parentIndex;

        if (this.heap[left] < this.heap[parentIndex]) {
            smallest= left;
        }

        if (this.heap[right] < this.heap[left]) {
            smallest= right;
        }

        if (smallest!==parentIndex) {
            let temp= this.heap[parentIndex];
            this.heap[parentIndex]= this.heap[smallest];
            this.heap[smallest]= temp;
            this.__maxHeapify(smallest);
        }
    }
    getMin() {
        return this.heap[0];
    }
}
let h= new MinHeap();
h.insert(1);
h.insert(10);
h.insert(5);
h.insert(25);
h.insert(0);
console.log(h.getMin());
h.remove();
console.log(h.getMin());
