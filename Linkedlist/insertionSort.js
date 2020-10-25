function insertionSort(list) {
        let sorted= null;
        let currentNode= list.head;

        while(currentNode!==null) {
            let temp= currentNode.nextElement;
            sorted= sortedInsertion(sorted, currentNode);
            currentNode= temp
        }
        return sorted;
    }

    function sortedInsertion(head, currentNode) {
        if (!currentNode) {
            return currentNode;
        }

        if (!head || currentNode.data <= head.data) {
            currentNode.nextElement= head;
            return currentNode;
        }

        let temp= head;

        while (temp.nextElement && temp.nextElement.data < currentNode.data) {
            temp= temp.nextElement;
        }

        currentNode.nextElement= temp.nextElement;
        temp.nextElement= currentNode;

        return head;
    }
    //[29, 23, 82, 11]
    let list= new LinkedList();
    list.insertAtTail(29);
    list.insertAtTail(23);
    list.insertAtTail(82);
    list.insertAtTail(11);
    console.log(insertionSort(list));
    
 /**
 Runtime complexity 
The runtime complexity of this solution is quadratic, O(n^2).

Memory complexity 
The memory complexity of this solution is constant, O(1)O(1).

The concept of Insertion Sort is very simple. We’ll maintain two linked lists:

Original list (given to us as input).
Sorted list (initially empty).
 **/   
