function reverse_sub_list(list, p, q) {
    let head= list.head;
    let current= head;
    let prev= null;

    // ignore p-1;
    let i=0;

    while(i< p-1) {
        prev= current;
        current= current.nextElement;
    }

    let lastElInFirstHalf= prev;
    let lastElAfterReverse= current;

    // reverse p to q
    i=0;

    while(i<p-q+1) {
        let temp= current.nextElement;
        current.nextElement= prev;
        prev= current;
        current= temp;
    }

    // Adding linkages.
    lastElInFirstHalf.nextElement= prev;
    lastElAfterReverse.nextElement= current;

    return head;
}
