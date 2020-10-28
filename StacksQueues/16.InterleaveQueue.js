// interleave elements.
// https://www.geeksforgeeks.org/interleave-first-half-queue-second-half/

function interLeaveQueue(queue) {
    if (queue.length()%2!==0) {
        console.log("input even count of numbers");
        return;
    }
   //11 12 13 14 15 16 17 18 19 20.
    let stack= new Stack();
    let halfSize= queue.length()/2;

    // q: 16 17 18 19 20; s: 11 12 13 14 15(T)
    for (var i=0;i<halfSize;i++) {
        stack.push(queue.dequeue());
    }

    // q: 16 17 18 19 20 15 14 13 12 11 ; s: empty
    for (var i=0;i<halfSize;i++) {
        queue.enqueue(stack.pop());
    }

    //q: 15 14 13 12 11 16 17 18 19 20
    for (var i=0;i<halfSize;i++) {
        queue.enqueue(queue.dequeue());
    }

    //q: 16 17 18 19 20 , s: 15 14 13 12 11(T).
    for (var i=0; i<halfSize;i++) {
        stack.push(queue.dequeue());
    }

    // enque queue from stack and queue alternatively.

    while(stack.isEmpty() === false) {
        queue.enqueue(stack.pop());
        queue.enqueue(queue.dequeue());
    }
    return queue;
}

let queue= new Queue();
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
queue.enqueue(14);
queue.enqueue(15);
queue.enqueue(16);
queue.enqueue(17);
queue.enqueue(18);
queue.enqueue(19);
queue.enqueue(20);
console.log(interLeaveQueue(queue));
