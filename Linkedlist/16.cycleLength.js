function lengthOfCycle(list) {
    let currentNode= list.head;

    let slow= currentNode;
    let fast= currentNode;

    while(slow && fast && fast.nextElement) {
        slow= slow.nextElement;
        fast= fast.nextElement.nextElement;

        if (slow === fast) {
            return calculateCycleLength(slow);
        }
    }
    return "no cycle";
}

function calculateCycleLength(slow) {
    let current= slow;
    let length= 0;

    while(current!==null) {
        current= current.nextElement;
        length+=1;
        if (current === slow) {
            break;
        }
    }
    return length;
}
