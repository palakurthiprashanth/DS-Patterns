class InorderIterator {
    constructor(root) {
        this.stack= new Stack();
        this.populateStack(root);
    }

    populateStack(root) {
        while(root) {
            this.stack.push(root);
            root= root.leftChild;
        }
    }

    hasNext() {
        return !this.stack.isEmpty();
    }

    getNext() {
        if (this.stack.isEmpty()) {
            return null;
        }

        let nValue= this.stack.pop();
        let rightValue= nValue.rightChild;
        this.populateStack(rightValue);
        return nValue;
    }
}

function inorderUsingIterator(root) {
    let itr= new InorderIterator(root);
    let result= "";
    while(itr.next()) {
        let temp= itr.getNext();
        result+=temp+" ";
    }
    return result;
}
