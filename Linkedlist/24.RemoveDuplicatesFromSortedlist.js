function removeDuplicatesFromSorted(list) {
    let currentNode= list.head;

    while (currentNode && currentNode.nextElement!==null) {
        if (currentNode.data === currentNode.nextElement.data) {
            currentNode.nextElement= currentNode.nextElement.nextElement;
        }else {
            currentNode= currentNode.nextElement;
        }
    }
    return list;
}

let list= new LinkedList();
list.insertAtTail(5);
list.insertAtTail(4);
list.insertAtTail(3);
list.insertAtTail(3);
list.insertAtTail(2);
list.insertAtTail(2);
list.insertAtTail(1);
console.log(removeDuplicatesFromSorted(list));
