// stack operations on middle element , with O(1) TC.

class stackForMiddleElement {
    constructor() {
        this.head= null;
        this.middleElement= null;
        this.count= 0;
    }
    push(value) {
        let DllNode= new DoublyLinkedListNode(value);

        //linking next and previous elements.
        DllNode.nextElement= this.head;
        if (this.head!==null) {
            this.head.previousElement= DllNode;
        }
        this.head= DllNode;

        //increment the count.
        this.count+=1;

        if (this.count === 1) {
            this.middleElement= DllNode;
        }else {
            if (this.count%2!==0) {
                this.middleElement= this.middleElement.previousElement;
            }
        }
    }
    pop() {
        if (this.count ===0) {
            console.log("cannot pop the value");
            return;
        }

        // removing from DLL.
        let item= this.head.data;
        this.head= this.head.nextElement;
        if (this.head!==null) {
            this.head.previousElement= null;
        }

        this.count-=1;

        if (this.count%2 === 0) {
            this.middleElement= this.middleElement.nextElement;
        }

        return item;
    }

    getMiddle() {
        if (this.count===0) {
            console.log("Empty stack.");
        }
        return this.middleElement.data;
    }
    deleteMiddle() {
        if (this.count===0) {
            console.log("Empty stack.");
        }
        this.middleElement.previousElement.nextElement= this.middleElement.nextElement;
        this.middleElement.nextElement.previousElement= this.middleElement.previousElement;

        return this.head;
    }
}

let st= new stackForMiddleElement();
st.push(1);
st.push(2);
st.push(3);
console.log(st.getMiddle());
console.log(st.deleteMiddle());
