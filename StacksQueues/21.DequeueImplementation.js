
// https://dev.to/swarup260/data-structures-algorithms-in-javascript-deque-g7b


class Dequeue {
    constructor() {
        this.items= [];
        this.count= 0;
        this.lowestCount= 0;
    }
    isEmpty() {
        return this.item.length ===0;
    }
    length() {
        this.items.length;
    }
    insertAtBack(element) {
        this.items[this.count] = element;
        this.count++;
    }
    insertAtFront(element) {
        if (this.isEmpty()) {// Both insert at back and insert at front are same as it is empty.
            this.insertAtBack();
        }else if(this.lowestCount >0){// if few elements are removed from front then lowest count >0 with free space at front.
            this.lowestCount--;
            this.items[this.lowestCount]= element;
        }else {// if nothing is removed from front move element up by 1 index so it will create empty space at 0th index where we can insert.
            for (var index= this.count;index>0; index--) {
                this.items[index]= this.items[index-1];
            }
            this.items[0]= element;
            this.count++;
        }
    }
    deleteAtBack() {
        if (this.isEmpty()) {
            return null;
        }
        this.count--;
        return this.items.pop();
    }
    deleteAtFront() {
        if (this.isEmpty()) {
            return null;
        }
        this.count--;
        this.lowestCount++;
        return this.items.shift();
    }
    getFront() {
        return this.items[0];
    }
    getBack() {
        return this.items[this.count-1];
    }
}
