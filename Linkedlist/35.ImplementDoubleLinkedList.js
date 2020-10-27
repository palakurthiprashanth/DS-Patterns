class DoublyLinkedListNode {
    constructor(data) {
        this.data= data;
        this.previousElement= null;
        this.nextElement= null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head= null;
        this.tail= null;
    }

    isEmpty() {
      return (this.head == null);
    }

    insertAtHead(newData) {
        let node= new DoublyLinkedListNode(newData);
        if (this.isEmpty()) {
            this.head= node;
            this.tail= node;
            return this;
        }
        node.nextElement= this.head;
        this.head.previousElement= node;
        this.head= node;
        return this;
    }
    insertAtTail(newData) {
        let node= new DoublyLinkedListNode(newData);
        if (this.isEmpty()) {
            this.head= node;
            this.tail= node;
            return this;
        }
        this.tail.nextElement= node;
        node.previousElement= this.tail;

        this.tail= node;

        return this;
    }
    search(value) {
        let currentNode= this.head;

        while(currentNode!==null) {
            if (currentNode.data === value) {
                return true;
            }
            currentNode= currentNode.nextElement;
        }
        return false;
    }
    deleteAtHead() {
        if (this.isEmpty()) {
            return this;
        }
        this.head= this.head.nextElement;
        if (this.head === null) {
            this.tail= null;
            return this;
        }
        this.head.previousElement= null;
        return this;
    }
    deleteAtTail() {
        if (this.isEmpty()) {
            return this;
        }
        this.tail= this.tail.previousElement;
        this.tail.nextElement= null;
        return this;
    }
}
