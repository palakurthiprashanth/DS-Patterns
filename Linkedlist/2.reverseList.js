// TC= O(n)
    function reverse(list) {
        let prevNode= null;
        let currentNode= list.head;
        let nextNode= null;

        while(currentNode!==null) {
            nextNode= currentNode.nextElement;
            currentNode.nextElement= prevNode;
            prevNode= currentNode;
            currentNode= nextNode;
        }

        list.head= prevNode;
        return list;
    }
    let list = new LinkedList();
    list.insertAtHead(4);
    list.insertAtHead(9);
    list.insertAtHead(6);
    list.insertAtHead(1);
    list.insertAtHead(0);
    console.log(reverse(list));

 // Reccursion solution
 function reverselistRecc(list, prevNode=null, currentNode, nextNode) {
        if (currentNode === null) {
            list.head= prevNode;
            return list;
        }
        nextNode= currentNode.nextElement;
        currentNode.nextElement= prevNode;
        prevNode= currentNode;
        currentNode= nextNode;
        return reverselistRecc(list, prevNode, currentNode, nextNode);
    }
    console.log(reverselistRecc(list, null, list.head, null));
