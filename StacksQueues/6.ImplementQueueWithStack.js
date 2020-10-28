class QueueUsingStacks {
    constructor() {
        this.tempStack= new Stack();
        this.mainStack= new Stack();
    }
    enqueue(value) {
        // push in main stack.
        this.mainStack.push(value);
    }
    dequeue() {
        if (this.mainStack.isEmpty() && this.tempStack.isEmpty()) {
            return null;
        }else if (this.tempStack.isEmpty()) {
            while(this.mainStack.isEmpty()) {
                this.tempStack.push(this.mainStack.pop());
            }
            return this.tempStack.pop();
        }
        return this.tempStack.pop();
    }
}
