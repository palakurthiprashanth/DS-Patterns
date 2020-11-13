/**
You have to implement the isDisjoint() function which checks whether two given arrays are disjointed or not. Two arrays are disjointed if there are no common elements between them. The assumption is that there are no duplicate elements 
in each array.
**/

function isDisjoint(list1,list2){  
  //Write code here
  let ht = new HashTable();
  //Inserting list1's elements in ht
  for(var i = 0; i < list1.length; i++){
    ht.insert(list1[i], i);
  }
  //Checking to see if all of list2's elements are in the hashtable
  for(var j = 0; j < list2.length; j++){
    if(ht.search(list2[j]) != null){
       return false; //return false if there is an element in list2 that is in list1
    }
  }
  return true;
}
