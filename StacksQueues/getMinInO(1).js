class minStack {
    constructor() {
        this.mainStack= new Stack();
        this.minStack= new Stack();
    }
    pop() {
        this.minStack.pop();
        return this.mainStack.pop();
    }
    push(value) {
        this.mainStack.push(value);
        if (value > this.minStack.getTop() && this.minStack.isEmpty() === false) {
            this.minStack.push(this.minStack.getTop());
        }else {
            this.minStack.push(value);
        }
    }
    min() {
        return this.minStack.pop();
    }
}
var stack = new minStack()
stack.push(5)
stack.push(2)
stack.push(4)
stack.push(1)
stack.push(3)
stack.push(9)

console.log("minimum value: ",stack.min()); //1

stack.pop()
stack.pop()
stack.pop()

console.log("minimum value: " ,stack.min()); //2
