function reverseDoubleLL(list) {
    let currentNode= list.head;
    let temp= null;

    while(currentNode!==null) {
        temp= currentNode.previousElement;
        currentNode.previousElement= currentNode.nextElement;
        currentNode.nextElement= temp;
        currentNode= currentNode.previousElement;
    }

    if (temp!==null) {
        this.head= temp.previousElement
    }
    return this.head;
}

let list= new DoublyLinkedList();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);

console.log(reverseDoubleLL(list));
