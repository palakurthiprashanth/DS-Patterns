function sortStackRecursion(stack) {
    if (stack.isEmpty() === false) {
        let topValue= stack.pop();
        sortStackRecursion(stack);
        insertionSort(stack, topValue);
    }
}

function insertionSort(stack, insertvalue) {
    if (stack.isEmpty() || insertvalue < stack.getTop()) {
        stack.push(insertvalue);
    }else {
        let popedValue= stack.pop();
        insertionSort(stack, insertvalue);
        stack.push(popedValue);
    }
}

let myStack= new Stack();
myStack.push(3);
myStack.push(1);
myStack.push(4);
sortStackRecursion(myStack);
console.log(myStack);
