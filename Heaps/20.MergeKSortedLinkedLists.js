function merge_lists(lists) {
    let minHeap= new Heap(function(a, b) {
        return b.data-a.data;
    });
    
    lists.forEach(function(list) {
        if (list!==null) {
            minHeap.push(list);
        }
    });

    let listHead= null;
    let listTail= null;

    while(minHeap.length() > 0) {
        let node= minHeap.pop();
        if (listHead === null) {
            listHead=listTail= node;
        }else {
            listTail.nextElement= node;
            listTail= listTail.nextElement;
        }
        if (node.nextElement!==null) {
            minHeap.push(node.nextElement);
        }
    }
    return listHead;
}
const l1 = new Node(2);
l1.nextElement = new Node(6);
l1.nextElement.nextElement = new Node(8);

const l2 = new Node(3);
l2.nextElement = new Node(6);
l2.nextElement.nextElement = new Node(7);

const l3 = new Node(1);
l3.nextElement = new Node(3);
l3.nextElement.nextElement = new Node(4);

let result = merge_lists([l1, l2, l3]);
console.log(result);

/**
Time complexity #
Since we’ll be going through all the elements of all arrays and will be removing/adding one element to the heap in each step, the time complexity of 
the above algorithm will be O(N*logK) where ‘N’ is the total number of elements in all the ‘K’ input arrays.

Space complexity #
The space complexity will be O(K) because, at any time, our min-heap will be storing one number from all the ‘K’ input arrays.


**/
