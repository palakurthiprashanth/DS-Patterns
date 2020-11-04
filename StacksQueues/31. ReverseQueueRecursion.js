function reverseQueueRecursion(queue) {
    if (queue.isEmpty()) {
        return queue;
    }
    if (queue.isEmpty() === false) {
        let topValue= queue.getTop();
        queue.dequeue();
        reverseQueueRecursion(queue);
        queue.enqueue(topValue);
        return queue;
    }
}

let q= new Queue();
q.enqueue(3);
q.enqueue(2);
q.enqueue(1);
console.log(reverseQueueRecursion(q));
