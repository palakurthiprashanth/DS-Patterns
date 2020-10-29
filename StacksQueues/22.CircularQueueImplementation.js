class CircularQueue {
    constructor(size) {
        this.items= [];
        this.size= size;
        this.front= 0;
        this.back= -1;
    }
    isEmpty() {
        return this.items.length === 0;
    }
    length() {
        return this.items.length;
    }
    enqueue(value) {
        if (this.items.length >=this.size) {
            console.log("Queue is full");
            return;
        }
        this.back++
        this.items[this.back % this.size]= value;
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log("Nothing to remove.");
            return;
        }
        let value= this.getFront();
        this.items[this.front % this.size]= null;
        this.front++;
        return value;
    }
    getFront() {
        if (this.isEmpty()) {
            console.log("Empty.");
            return -1;
        }
        return this.items[this.front % this.size];
    }
}
