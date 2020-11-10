// delete fn needs to be implemented which deletes specific value in heap.
class Heap {
    constructor(compareFn) {
        this.heap= [];
        this.elements= 0;
        this.compareFn= compareFn;
    }
    length() {
        return this.heap.length;
    }
    push(value) {
        this.heap.push(value);
        this.elements= this.elements+1;
        this.__percolateUp(this.heap.length - 1);
    }
    __percolateUp(childIndex) {
        let parentIndex= Math.floor((childIndex -1)/2);

        // For root element there will not be parent.
        if (parentIndex <0) {
            return;
        }

        if (this.compareFn(this.heap[parentIndex], this.heap[childIndex]) < 0) {
            let temp= this.heap[parentIndex];
            this.heap[parentIndex]= this.heap[childIndex];
            this.heap[childIndex]= temp;
            this.__percolateUp(parentIndex);
        }
    }
    pop() {
        let top= this.heap[0];
        this.heap[0]= this.heap[this.heap.length-1];
        this.heap.pop();
        this.elements= this.elements-1;
        this.__Heapify(0);
        return top;
    }
    __Heapify(parentIndex) {
        let left= (2*parentIndex)+1;
        let right= (2*parentIndex)+2;
        let swapIndex= parentIndex;
        
        // For last element lft and right child indexes are greater than this.elements.
        if ((left < this.elements) && this.compareFn(this.heap[swapIndex], this.heap[left]) < 0) {
            swapIndex= left;
        }

        if ((right < this.elements) && this.compareFn(this.heap[swapIndex], this.heap[right]) < 0) {
            swapIndex= right;
        }

        if (parentIndex!==swapIndex) {
            let temp= this.heap[parentIndex];
            this.heap[parentIndex]= this.heap[swapIndex];
            this.heap[swapIndex]= temp;

            this.__Heapify(swapIndex);
        }
    }
    peek() {
        return this.heap[0];
    }
    toArray() {
        return this.heap;
    }
    addEach(arr) {
        for (var i=0; i<arr.length;i++) {
            this.push(arr[i]);
        }
    }
}
/**
let min= new Heap(function(a, b) {
       return b-a;
   }); 
   min.push(5);
   min.push(1);
   min.push(6);
   min.push(7);
   min.push(4);
   min.push(2);
   console.log(min.peek());//1
   min.pop();
   console.log(min.peek());//2
   **/

   var max = new Heap(function(a, b) {
            return a[2]-b[2];
        });
        max.push([1,2,3]);
        max.push([1,5,7]);
        max.push([12,23,9]);
        max.push([122,22,2]);
        max.pop();
        console.log(max.peek());// [1,5,7]
