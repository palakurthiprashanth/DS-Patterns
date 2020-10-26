// 1->2->3->4->5->6;
// 2->4->6->1->3->5;
function seperateOddEven(list) {
    let head= list.head;

    let evenStartNode= null;
    let evenEndnode= null;
    let oddStartNode= null;
    let oddEndNode= null;

    while (head!==null) {
        if (head.data %2 === 0) {
            if (evenStartNode === null) {
                evenStartNode= head;
                evenEndnode= head;
            }else {
                evenEndnode.nextElement= head;
                evenEndnode= evenEndnode.nextElement;
            }
        }else {
            if (oddStartNode === null) {
                oddStartNode= head;
                oddEndNode= head;
            }else {
                oddEndNode.nextElement= head;
                oddEndNode= oddEndNode.nextElement;
            }
        }
        head= head.nextElement;
    }
    evenEndnode.nextElement= oddStartNode;
    oddEndNode.nextElement= null;
    return evenStartNode;
}

let list= new LinkedList();
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(5);
list.insertAtTail(6);
console.log(seperateOddEven(list));
