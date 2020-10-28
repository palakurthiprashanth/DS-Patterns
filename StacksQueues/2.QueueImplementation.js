class Queue {
    constructor() {
        this.items= [];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    length() {
        return this.items.length;
    }
    getTop() {
        if (this.items.length!==0) {
            return this.items[0];
        }
        return null;
    }
    enqueue(value) {
        this.items.push(value);
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }
}
