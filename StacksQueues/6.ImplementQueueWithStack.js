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

/**
Time Complexity #
This solution is the best of the three solutions in this lesson, as the transfer of elements between stacks takes place only if tempStack is empty. 
Therefore, the amortized complexity of the dequeue operation becomes O(n)O(n), while the time complexity for the enqueue operation 
is O(1)O(1).
**/
