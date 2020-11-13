function removeDuplicatesFromList(list) {
    let visited= new HashTable();
    let currentNode= list.getHead();
    let prevNode= list.getHead();
    
    while(list.isEmpty() === false && currentNode.nextElement!==null) {
        if (visited.search(currentNode.data) !==null) {
            // It is duplicate.
            prevNode.nextElement= currentNode.nextElement;
            currentNode= currentNode.nextElement;
            continue;
        }
        visited.insert(currentNode.data, 1);
        prevNode= currentNode;
        currentNode= currentNode.nextElement;
    }
}

// This is a linear algorithm, meaning, the time complexity is O(n).
