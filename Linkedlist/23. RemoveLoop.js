// https://www.youtube.com/watch?v=JsVGDy0u1u8
function removeLoop(list) {
    let head= list.head;
    let cycleLength= lengthOfCycle(list);

    let pointer1= head;
    let pointer2= head;

    while(cycleLength >0) {
        pointer2= pointer2.nextElement;
        cycleLength--;
    }
    let prev= null;

    while (pointer1 && pointer2) {
        if (pointer1.nextElement === pointer2.nextElement) {
            pointer2.nextElement= null;
        }
        pointer1= pointer1.nextElement;
        pointer2= pointer2.nextElement;
    }
    return head;
}

let list = new LinkedList();

list.insertAtHead(21);
list.insertAtHead(14);
list.insertAtHead(7);

let head = list.getHead();
let node = list.getHead();

// Adding a loop
for(var i=0; i<4; i++){
  if(node.nextElement == null){
    node.nextElement = head.nextElement;
    break;
  }
  node = node.nextElement
}
console.log(removeLoop(list));
