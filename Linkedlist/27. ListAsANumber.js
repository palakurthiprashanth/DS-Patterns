function listAsANumber(list) {
    let currentNode= list.head;
    let number= 0;

    while (currentNode!==null) {
        number= (10*number)+currentNode.data;
        currentNode= currentNode.nextElement;
    }
    return number;
};

let list= new LinkedList();
list.insertAtTail(5);
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);

console.log(listAsANumber(list));// 5123
