class Stack {
    constructor() {
        this.items= [];
        this.top= null;
    }
    isEmpty() {
        return this.items.length === 0;
    }
    length() {
        return this.items.length;
    }
    getTop() {
        return this.top;
    }
    push(value) {
        this.top= value;
        this.items.push(value);
    }
    pop() {
        if (this.items.length === 1) {
            this.top= null;
            return this.items.pop();
        }
        if (this.items.length===0) {
            return null;
        }
        this.top= this.items[this.items.length-2];
        return this.items.pop();
    }
}
