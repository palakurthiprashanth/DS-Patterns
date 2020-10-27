// split circular list into 2 halves.

function splitCircularList(list) {
    let head= list.head;

    let slow= head;
    let fast= head;
    while(slow && fast && fast.nextElement!==head && fast.nextElement.nextElement!==head) {
        slow= slow.nextElement;
        fast= fast.nextElement.nextElement;
    }

    // move fast ptr to last element so we can attach to head to make it circular.
    if (fast.nextElement.nextElement === head) {
        fast= fast.nextElement;
    }

    let head1= head;
    head2= slow.nextElement;

    // make second half circular
    fast.nextElement= slow.nextElement;

    // make first half circular
    slow.nextElement= head;
}
