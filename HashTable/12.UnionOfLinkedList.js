//  We insert our first list completely into a hash table. Next, we insert all the elements of the second list, that are not present in the hash table, 
//  in the first list.

function union(list1, list2) {
  // Write your code here
  let hashtable = new HashTable();
  let list1Iter = list1.getHead();
  while(list1Iter != null){
    hashtable.insert(list1Iter.data, 1);
    list1Iter = list1Iter.nextElement;
  }
  let list2Iter = list2.getHead();
  while(list2Iter != null){
    if (hashtable.search(list2Iter.data) == null) {
      list1.insertAtHead(list2Iter.data);
    }
    list2Iter = list2Iter.nextElement;
  }
  return list1;
}

/**
Time Complexity #
The time complexity of inserting n elements of the first list in the hash table is O(n), while time complexity of checking second list’s m element in the 
hash table and then inserting them at the head would incur a time complexity of O(m). Thus overall time complexity would be O(m+n).
**/
