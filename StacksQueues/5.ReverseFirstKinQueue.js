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
/**
Time Complexity #
Overall, kk elements are dequeued, pushed to the stack, popped from it, and then enqueued. Additionally, n-kn−k elements are dequeued and enqueued to the queue. 
On the assumption that each push, pop, enqueue or dequeue operation takes constant time, the time complexity of this function is O(n)O(n) as all nn elements have 
to be processed with constant-time​ operations.
**/
