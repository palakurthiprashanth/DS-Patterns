// Reverse Alternate K Nodes in a Singly Linked List.
 // 1->2->3->4->5->6->7
 // 3->2->1->6->5->4->7
 // TC- O(N).
 // SC- O(1).
function reverseKnodes(list, k) {
    let head= list.head;

    let reversed= null;
    let previousTail= null;

    while(head && k>0) {
        let currentHead= null;
        let currentTail= head;

        let n=k;

        while(head && n>0) {
            let temp= head.nextElement;
            head.nextElement= currentHead;
            currentHead= head;
            head= temp;
            n--;
        }

        if (!reversed) {
            reversed= currentHead;
        }

        if (previousTail) {
            previousTail.nextElement= currentHead;
        }
        previousTail= currentTail;
    }
    return reversed;
}
let list = new LinkedList();
    list.insertAtHead(7);
    list.insertAtHead(6);
    list.insertAtHead(5);
    list.insertAtHead(4);
    list.insertAtHead(3);
    list.insertAtHead(2);
    list.insertAtHead(1);

    console.log(reverseKnodes(list,3));
