function rotateInDLL(list, n) {
    let currentNode= list.head;
    let length= list.length();

    n= n%length;
    if (n <0) {
        n= n+length;
    }

    let rotationsCount= length-n-1;
    temp= currentNode;
    while(rotationsCount >0) {
        temp= temp.nextElement;
        rotationsCount--;
    }

    let newHead= temp.nextElement;
    temp.nextElement= null;
    newHead.previousElement= null;

    temp= newHead;
    while(temp.nextElement!==null) {
        temp= temp.nextElement;
    }
    temp.nextElement= currentNode;
    currentNode.previousElement= temp;
    
    return newHead;

}
let list= new DoublyLinkedList();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);
console.log(rotateInDLL(list, 2));
