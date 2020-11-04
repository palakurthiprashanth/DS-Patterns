
function reverseStackRecursion(stack) {
    if (stack.isEmpty() === false) {
        let temp= stack.pop();
        reverseStackRecursion(stack);
        insertAtBottom(stack, temp);
    }
}

function insertAtBottom(stack, bottomValue) {
    if (stack.isEmpty()) {
        stack.push(bottomValue);
    }else {
        let popedValue= stack.pop();
        insertAtBottom(stack, bottomValue);
        stack.push(popedValue);
    }
}

let myStack = new Stack(); 
myStack.push(2); 
myStack.push(3); 
myStack.push(5); 
myStack.push(8);
console.log(myStack);
reverseStackRecursion(myStack);
console.log(myStack);
