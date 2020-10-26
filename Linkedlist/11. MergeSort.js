let splitInHalf = function(head, firstSecond) {
    if (!head) {
        firstSecond.first = null;
        firstSecond.second = null;
        return;
    }

    // Only one element in the list
    if (!head.nextElement) {
        firstSecond.first = head;
        firstSecond.second = null;
    } else {
        // Let's use the classic technique of moving two pointers:
        // 'fast' and 'slow'. 'fast' will move two steps in each 
        // iteration where 'slow' will be pointing to middle element
        // at the end of loop.
        let slow = head;
        let fast = head.nextElement;
        while (fast) {
            fast = fast.nextElement;
            if (fast) {
                fast = fast.nextElement;
                slow = slow.nextElement;
            }

        }

        firstSecond.first = head;
        firstSecond.second = slow.nextElement;
        // Terminate first linked list.
        slow.nextElement = null;
    }
};

let mergeSortLists = function(first, second) {
    if (!first) {
        return second;
    }

    if (!second) {
        return first;
    }

    let newHead = null;

    if (first.data <= second.data) {
        newHead = first;
        first = first.nextElement;
    } else {
        newHead = second;
        second = second.nextElement;
    }

    let newCurrent = newHead;
    while (first && second) {
        let temp = null;
        if (first.data <= second.data) {
            temp = first;
            first = first.nextElement;
        } else {
            temp = second;
            second = second.nextElement;
        }

        newCurrent.nextElement = temp;
        newCurrent = temp;
    }

    if (first) {
      newCurrent.nextElement = first;
    } else if (second) {
      newCurrent.nextElement = second;
    }

    return newHead;
};

let mergeSort = function(head) {
    // No need to sort a single element.
    if (!head || !head.nextElement) {
      return head;
    }

    let first = null;
    let second = null;
    let firstSecond = {first, second};

    // Let's split the list in half, sort the sublists
    // and then merge the sorted lists.
    splitInHalf(head, firstSecond);

    firstSecond.first = mergeSort(firstSecond.first);
    firstSecond.second = mergeSort(firstSecond.second);

    return mergeSortLists(firstSecond.first, firstSecond.second);
}; // [29, 23, 82, 11, 4, 3, 21];
    let list= new LinkedList();
    list.insertAtTail(29);
    list.insertAtTail(23);
    list.insertAtTail(82);
    list.insertAtTail(11);
    list.insertAtTail(4);
    list.insertAtTail(3);
    list.insertAtTail(21);
    console.log(mergeSort(list.head));
