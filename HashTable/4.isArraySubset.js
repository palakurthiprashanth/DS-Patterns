/**
Implement the isSubset(list1,list2) function which will take two arrays as input and check whether one array is the subset of the other. 
Use the implementation of hash tables that we have built in the previous lessons!

**/

function isSubset(list1, list2) {
    let ht= new HashTable();

    for (var i=0;i<list1.length;i++) {
        ht.insert(list1[i],i);
    }

    for (var j=0;j<list2.length;j++) {
        if (ht.search(list2[j])=== null) {
            return false;
        }
    }
    return true;
}
var list1=[1, 2, 3, 4, 5, 6];
var list2=[2, 4, 6];
var list3=[7, 8, 3];
console.log(isSubset(list1, list2));// true
console.log(isSubset(list1, list3));// false

/**
Time Complexity #
Since this algorithm traverses the whole of the list1 once and list2 is only traversed if its size is less than list1. Thus we will have 2 \times× n traversal, 
if list1's length was n, therefore, its time complexity is O(n).


**/
