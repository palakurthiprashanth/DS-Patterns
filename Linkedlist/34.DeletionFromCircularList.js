function deleteHeadFromCircular(list) {
    let currentNode= list.head;
    let head= list.head;

    // Loop till last element.
    while (currentNode!==null && currentNode.nextElement!==head) {
        currentNode= currentNode.nextElement;
    }

    // pointing head to 2nd element.
    head= list.head.nextElement
    // making circular by linking last element to 2nd element.
    currentNode.nextElement= head;
    // removing linkage from 1st element.
    list.head.nextElement= null;

    return head;
}

function deleteTailFromCircularList(list) {
    let currentNode= list.head;
    let head= list.head;

    while(currentNode.nextElement.nextElement!==head) {
        currentNode= currentNode.nextElement;
    }
    currentNode.nextElement= head;

    return head;
}

let list= new LinkedList();
list.head= new Node(1);
list.head.nextElement= new Node(2);
list.head.nextElement.nextElement= new Node(3);
list.head.nextElement.nextElement.nextElement= new Node(4);
list.head.nextElement.nextElement.nextElement.nextElement= new Node(5);
list.head.nextElement.nextElement.nextElement.nextElement.nextElement= list.head;

// console.log(deleteHeadFromCircular(list));
// console.log(deleteTailFromCircularList(list));
