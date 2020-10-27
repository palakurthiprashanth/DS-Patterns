/**
Approach:

Find the length of both the linked lists say : a_len and b_len
Find the lenDiff = (a_len ~ b_len)
Traverse the longer linked list by lenDiff
Now traverse both the lists at the same time
Check whether nodes are same, if yes then we have found the intersection point
If we reach the end of the link lists then there is no intersection point.
**/

function intersectionPoint(list1, list2) {
        let list1node = null;
        let list1length = list1.length();
        let list2node = null;
        let list2length = list2.length();

        let length_difference = 0;
        if (list1length >= list2length) {
            length_difference = list1length - list2length;
            list1node = list1.head;
            list2node = list2.head;
        } else {
            length_difference = list2length - list1length;
            list1node = list2.head;
            list2node = list1.head;
        }

        while (length_difference > 0) {
            list1node = list1node.nextElement;
            length_difference--;
        }

        while (list1node) {
            if (list1node === list2node) { // address should be same.
                return list1node.data;
            }
                list1node = list1node.nextElement;
                list2node = list2node.nextElement;
        }

        return null;
    }

    //List 1: 13, 4, 12, 27
    //List 2: 23, 29, 82, 11, 12, 27
    let list1= new LinkedList();
    list1.insertAtTail(13);
    list1.insertAtTail(4);
    list1.insertAtTail(12);
    list1.insertAtTail(27);
    let list2= new LinkedList();
    list2.insertAtTail(23);
    list2.insertAtTail(29);
    list2.insertAtTail(82);
    list2.insertAtTail(11);
    list2.insertAtTail(12);
    list2.insertAtTail(27);
    console.log(intersectionPoint(list1, list2));
