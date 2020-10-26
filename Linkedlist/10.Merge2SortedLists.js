// TC = O(M+N).
    // SC = O(M+N).
    function mergeSortedLists(list1, list2) {
        let list1Head= list1.head;
        let list2Head= list2.head;
        let mergedList= new LinkedList();

        while(list1Head!==null && list2Head!==null) {
            if (list1Head.data<=list2Head.data) {
                mergedList.insertAtTail(list1Head.data);
                list1Head= list1Head.nextElement;
            }else {
                mergedList.insertAtTail(list2Head.data);
                list2Head= list2Head.nextElement;
            }
        }

        if (list1Head!==null) {
            mergedList.insertAtTail(list1Head);
        }
        if (list2Head!==null) {
            mergedList.insertAtTail(list2Head);
        }

        return mergedList;
    }
