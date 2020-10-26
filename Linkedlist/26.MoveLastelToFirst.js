function lastToFirst(list) {
    let currentNode= list.head;
    let first= list.head;
    let firstNext= first.nextElement;

    while(currentNode && currentNode.nextElement && currentNode.nextElement.nextElement!==null) {
        currentNode= currentNode.nextElement;
    }

    let beforeLast= currentNode;
    let last= currentNode.nextElement;

    beforeLast.nextElement= first;
    beforeLast.nextElement.nextElement= null;

    list.head= last;
    last.nextElement= firstNext;

    return list;
}

let list= new LinkedList();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);
console.log(lastToFirst(list));
