// enqueue is O(1).

class QueueUsingStacks {
    constructor() {
        this.stack1= new Stack();
        this.stack2= new Stack();
    }
    isEmpty() {
        return this.stack1.length() ===0 && this.stack2.length() === 0;
    }
    enqueue(value) {
        this.stack1.push(value);
    }
    dequeue() {
        if (this.isEmpty()) {
            return -1;
        }

        if (stack2.isEmpty()) {
            while(stack1.isEmpty() === false) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}

// Dequeue is O(1).

class QueueUsingStacks {
    constructor() {
        this.stack1= new Stack();
        this.stack2= new Stack();
    }
    isEmpty() {
        return this.stack1.length() === 0 && this.stack2.length() === 0;
    }
    enqueue(value) {
        if (this.stack1.isEmpty() === false) {
            this.stack2.push(this.stack1.pop());
        }
        this.stack2.push(value);

        if (this.stack2.isEmpty() === false) {
            this.stack1.push(this.stack2.pop());
        }
    }
    dequeue() {
        return this.stack1.pop();
    }
}
