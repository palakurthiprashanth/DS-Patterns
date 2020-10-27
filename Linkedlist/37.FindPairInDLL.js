// find pairs in DLL , if DLL is sorted.

function findPairInDLL(list, targetSum) {
    let first= list.head;
    let second= list.tail;
    let found= false;

    while(first!==null && second!==null && second!==first) {
        if ((first.data + second.data) === targetSum) {
            found= true;
            console.log("( "+first.data+" , "+second.data+" )");
            first= first.nextElement;
            second= second.previousElement;
        }else if ((first.data + second.data) > targetSum){
            second= second.previousElement;
        }else {
            first= first.nextElement;
        }
    }
    if (found === false) {
        console.log("no pair");
    }
}
let list= new DoublyLinkedList();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);
console.log(findPairInDLL(list, 9));
