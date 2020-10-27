// Delete nodes which have a greater value on right side
// we can run 2 loops compare ezch elem with the elem on right sides but TC will be O(n^2).
// ALGO: https://www.youtube.com/watch?v=RJhZ1Ld-rwA

function deleteGreaterValuesOnRight(list) {
    let reversedList= reverse(list);

    let currentNode= reversedList.head;
    let max= currentNode.data;
    while(currentNode.nextElement !==null) {
        if (currentNode.nextElement.data < max) {
            currentNode.nextElement= currentNode.nextElement.nextElement;
        }else if (currentNode.nextElement.data > max) {
            max= currentNode.nextElement.data;
            currentNode= currentNode.nextElement;
        }
    }
    let finalList= reverse(list);
    return finalList;
}
let list= new LinkedList();
list.insertAtTail(5);
list.insertAtTail(4);
list.insertAtTail(10);
list.insertAtTail(6);
list.insertAtTail(3);
list.insertAtTail(1);
list.insertAtTail(2);
console.log(deleteGreaterValuesOnRight(list));
