class TreeNode {
    constructor(value) {
        this.value= value;
        this.leftChild= null;
        this.rightChild= null;
    }
}

class BinarySearchTree {
    constructor(rootValue) {
        this.root= new TreeNode(rootValue);
    }
    insert(newValue) {
        if (this.root === null) {
            this.root= new TreeNode(newValue);
            return;
        };
        let currentNode= this.root;
        let parent;

        while(currentNode) {
            parent= currentNode;
            
            if (newValue < currentNode.value) {
                currentNode= currentNode.leftChild;
            }else {
                currentNode= currentNode.rightChild;
            }
        }
        if (newValue < parent.value) {
            parent.leftChild= new TreeNode(newValue);
        }else {
            parent.rightChild= new TreeNode(newValue);
        }
    }
    preOrderPrint(currentNode) {
        if (currentNode!==null) {
            console.log(currentNode.value);
            this.preOrderPrint(currentNode.leftChild);
            this.preOrderPrint(currentNode.rightChild);
        }
    }
    inOrderPrint(currentNode) {
        if (currentNode !== null) {
            this.inOrderPrint(currentNode.leftChild);
            console.log(currentNode.value);
            this.inOrderPrint(currentNode.rightChild);
        }
    }
    postOrderPrint(currentNode) {
        if (currentNode !== null) {
            this.postOrderPrint(currentNode.leftChild);
            this.postOrderPrint(currentNode.rightChild);
            console.log(currentNode.value);
        }
    }
    search(value) {
        let currentNode= this.root;
        while(currentNode && (currentNode.value !== value)) {
            if (value < currentNode.value) {
                currentNode= currentNode.leftChild;
            }else {
                currentNode= currentNode.rightChild;
            }
        }
        //after the loop, we'll have either the searched value
        //or null in case the value was not found.
        return currentNode;
    }
    delete(currentNode, value) {
        // 1. when tree is empty.
        if (currentNode === null) {
            return false;
        }
        // 2. When val is not found.
        let parent;
        while(currentNode && (currentNode.value !== value)) {
            parent= currentNode;
            if (value < currentNode.value) {
                currentNode= currentNode.leftChild;
            }else {
                currentNode= currentNode.rightChild;
            }
        }
        if (currentNode === null) {
            return false;
        }else if (currentNode.leftChild === null && currentNode.rightChild === null) {
           // 3. Deleting Leaf Node.
           if (currentNode.value === this.root.value) {
               this.root= null;
               return true;
           }else if (currentNode.value < parent.value) {
               parent.leftChild= null;
               return true;
           }else {
               parent.rightChild= null;
               return true;
           }
        }else if (currentNode.rightChild === null) {
            //4. Deleting node with only left child.
            if (currentNode.value === this.root.value) {
                this.root= null;
                return true;
            }else if (currentNode.value < parent.value) {
                parent.leftChild= currentNode.leftChild;
                return true;
            }else {
                parent.rightChild= currentNode.leftChild;
                return true;
            }
        }else if (currentNode.rightChild === null) {
            //5. Deleting Node with only Right child.
            if (currentNode.value === this.root.value) {
                this.root= null;
                return true;
            }else if (currentNode.value < parent.value) {
                parent.leftChild= currentNode.rightChild;
                return true;
            }else {
                parent.rightChild= currentNode.rightChild;
                return true;
            }
        }else {
            //6. Node to be deleted has 2 children.
            var minRight= currentNode.rightChild;
            while(minRight.leftChild !== null) {
                minRight= minRight.leftChild;
            }
            var temp= minRight.value;
            this.delete(this.root, minRight.value);
            currentNode.value= temp;
            return true;
        }
       
    }
}
