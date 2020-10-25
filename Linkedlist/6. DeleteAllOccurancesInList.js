// Delete All Occurrences of a Given Key in a Linked List
    function deleteAllOccurance(list, key) {
        let currentNode= list.head;

        if (currentNode.data === key) {
            list.head= currentNode.nextElement;
        }

        while(currentNode.nextElement!==null) {
            if (currentNode.nextElement.data === key) {
                currentNode.nextElement= currentNode.nextElement.nextElement;
            }
            currentNode= currentNode.nextElement;
        }

        return list.head;
    }
