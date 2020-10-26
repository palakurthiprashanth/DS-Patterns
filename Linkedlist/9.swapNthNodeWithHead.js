// TC= O(N).
    // SC= O(1).
    function swapNthNodeWithHead(list,n) {
        let currentNode= list.head;
        let headNext= currentNode.nextElement;

        while(currentNode!==null) {
            if(currentNode.nextElement.data === n) {
                let tempNode= currentNode.nextElement.nextElement;
                let newHead= currentNode.nextElement;
                currentNode.nextElement= list.head;
                list.head= newHead;
                currentNode.nextElement.nextElement= tempNode;
                list.head.nextElement= headNext;
                break;
            }
            currentNode = currentNode.nextElement;
        }
        return list.head;
    }
    let list = new LinkedList();
    list.insertAtHead(42);
    list.insertAtHead(35);
    list.insertAtHead(28);
    list.insertAtHead(21);
    list.insertAtHead(14);
    list.insertAtHead(7);
    console.log(swapNthNodeWithHead(list,42));
