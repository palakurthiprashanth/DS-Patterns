    class Node {
        constructor(data) {
            this.data= data;
            this.nextElement= null;
        }
    }

    class LinkedList {
        constructor() {
            this.head= null;
        }
        // list operations.

        isEmpty() {
            return this.head === null;
        }
        // =============================Insertion========================//
        // TC = O(1)
        insertAtHead(value) {
            let tempNode= new Node(value);
            tempNode.nextElement= this.head;
            this.head= tempNode;
            return this;
        }
        // TC= O(n)
        insertAtTail(value) {
            let tempNode= new Node(value);

            if(this.isEmpty()) {
                this.head= tempNode;
                return this;
            }

            let currentNode= this.head;

            while(currentNode.nextElement!==null) {
                currentNode= currentNode.nextElement;
            }

            currentNode.nextElement= tempNode;
            return this;
        }
        // Search.
        // TC= O(N).
        // SC= O(1).
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
        // ==============================Deletion========================//
        // TC= O(1).
        deleteAtHead() {
            if (this.isEmpty()) {
                return this;
            };
            let currentNode= this.head;
            this.head= currentNode.nextElement;
            return this;
        }
        // TC= O(N).
        deleteVal(value) {
            if (this.isEmpty()) {
                return false;
            }
            let currentNode= this.head;
            // if first element is target value to be deleted.
            if (currentNode.data === value) {
                this.head= currentNode.nextElement;;
            }
            while (currentNode.nextElement!==null) {
                if (currentNode.nextElement.data === value) {
                    currentNode.nextElement= currentNode.nextElement.nextElement;
                    return true;
                }
                currentNode= currentNode.nextElement;
            }
            return false;
        }
        // TC= O(n).
        deleteAtTail() {
            if (this.isEmpty()) {
                return this;
            }
            let currentNode= this.head;
            // if there is only one node , then delete at head.
            if (currentNode.nextElement ===null) {
                this.deleteAtHead();
                return this;
            }

            while(currentNode.nextElement.nextElement!==null) {
                currentNode= currentNode.nextElement;
            }

            currentNode.nextElement= null;
            return this;
        }
        // length of list.
        // TC= O(n).
        length(){
            if (this.isEmpty()){
                return 0;
            }
            let currentNode = this.head;
            let size =0;
            while(currentNode!==null) {
                size ++;
                currentNode = currentNode.nextElement;
            }
            return size;
        }
    }
