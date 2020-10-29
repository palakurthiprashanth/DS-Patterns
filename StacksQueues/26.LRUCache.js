// This requires some extra methods or modifications needed for existing Double linked list.
// we use DLL because DLL deletion is O(1).
// https://www.educative.io/courses/coderust-hacking-the-coding-interview/jRLoR



class LinkedListNode {
    constructor(key, value) {
        this.key= key;
        this.data= value;
        this.nextElement= null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity= capacity;
        this.cache= {};
        this.cacheValues= new LinkedList();// but this linkedlist should use LinkedListNode.
    }
    set (key, value) {
        if (this.cache[key]) {
            let node= this.cache[key];
            node.data= value;
            this.cacheValues.remove(node);
            this.cacheValues.insertAtTail(node);
        }else {
            evictIfNeeded();// if it exceeds capacity then delete;
            let node= new LinkedListNode(key, value);
            this.cacheValues.insertAtTail(node);
            this.cache[key]= node;
        }
    }
    get(key) {
        if (this.cache[key]) {
            let node= this.cache[key];
            this.cacheValues.remove(node);
            this.cacheValues.insertAtTail(node);
            return node.data;
        }else {
            return -1;
        }
    }
    evictIfNeeded() {
        if (this.cacheValues.length() >=this.capacity) {
            let node= this.cacheVals.removeAtHead();
            delete this.cache[node.key];
        }
    }
}
