class HashEntry {
    constructor(key, value) {
        this.key= key;
        this.value= value;

        this.nextElement= null;
    }
}

class HashTable{
    constructor() {
        this.slots= 10; // Hashtable capacity.
        this.bucket= []; // Where data/Hash entries will be filled.
        this.size= 0; // no of buckets filled

        for (var i=0;i<this.slots;i++) {
            this.bucket[i]= null;
        }

        this.threshold= 0.6; // used for resizing.
    }
    get_size(){
        return this.size;
    }
    isEmpty(){
        return this.get_size() == 0;
    }
    // Hash function.
    getIndex(key) {
        return key%this.slots;
    }
    // Resizing, it helps to avoid collisions and when ever it reaches threshold, it creates new hash table with double the capacity
    //and shift data to new Hash table.
    resize() {
        let new_slots= this.slots*2;
        let new_bucket= [];
        for (var i=0;i<new_slots;i++) {
            new_bucket[i]= null;
        }

        this.slots= new_slots;
        
        //Rehashing, moving data to new HT.
        for (var i=0;i<this.bucket.length;i++) {
            let head= this.bucket[i];
            while(head!==null) {
                let new_index= this.getIndex(head.key);
                // if value at index in new Hashtable is empty.
                if (new_bucket[new_index] === null) {
                    new_bucket[new_index]= new HashEntry(head.key, head.value);
                }else {
                    // value at index is filled, traverse till tail and insert
                    let node= new_bucket[new_index];
                    while (node!==null) {
                        if (node.key === head.key) {
                            node.value= head.value; // Override.
                            node= null;
                        }else if (node.nextElement === null) {
                            node.nextElement= new HashEntry(head.key, head.value);
                            node= null;
                        }else {
                            node= node.nextElement;
                        }
                    }
                }
                head= head.nextElement;
            }
        }
    }
    insert(key, value) {
        let index= this.getIndex(key);
        if (this.bucket[index] === null) {
            this.bucket[index]= new HashEntry(key, value);
            console.log("inserted");
        }else {
            let node= this.bucket[index];
            while(node!==null) {
                if (node.key === key) {
                    node.value= value;
                    console.log("inserted");
                    break;
                }else if (node.nextElement === null) {
                    node.nextElement= new HashEntry(key, value);
                    console.log("inserted");
                    break;
                }
                node= node.nextElement;
            }
        }
        this.size= this.size+1;
        let loadFactor= Number(this.size) / Number(this.slots);
        if (loadFactor >= this.threshold) {
            this.resize();
        }
    }
    search(key) {
        let index= this.getIndex(key);
        let node= this.bucket[index];
        if (node!==null) {
            while(node!==null) {
                if (node.key === key) {
                    return node.value;
                }
                node= node.nextElement;
            }
        }
        console.log("Key not found");
        return null;
    }
    delete(key) {
        let index= this.getIndex(key);
        let node= this.bucket[index];

        if (node.key === key) {
            this.bucket[index]= node.nextElement;
            this.size= this.size-1;
            console.log("Deleted.");
            return;
        }

        let prevNode= null;
        while(node!==null) {
            if (node.key === key) {
                prevNode.nextElement= node.nextElement;
                this.size= this.size-1;
                console.log("Deleted.");
                return;
            }
            prevNode= node;
            node= node.nextElement;
        }
         //If key does not exist
        console.log("Key not found");
        return;
    }
}
