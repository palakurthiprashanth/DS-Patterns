function reverseK(queue, k) {
    let stack= new Stack();

    let count= 0;
    while(count < k) {
        stack.push(queue.dequeue());
        count++;
    }

    while(stack.isEmpty() === false) {
        queue.enqueue(stack.pop());
    }

    for (var i=0; i< (queue.length()-k);i++) {
        queue.enqueue(queue.dequeue());
    }
    return queue;
}
