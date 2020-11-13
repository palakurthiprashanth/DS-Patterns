// Find Subarray whoose sum is Zero.

function findSubZero(my_list){
  //Use HashMap to store sum as key and index i as value till sum has been calculated
  //Traverse the array and return true if either 
  //my_list[i] == 0 or sum == 0 or HashMap already contains the sum
  //If you completely traverse the list and havent found any of the above three
  //conditions then simply return false
  let hMap = new HashTable();
  let sum = 0;
  //Traverse through the given array
  for (var i=0; i<my_list.length; i++){ 
    sum += my_list[i]
    if (my_list[i] == 0 || sum == 0 || hMap.search(sum) != null){
      return true;
    }
    hMap.insert(sum, i);
  }
  return false;
}

var list = [6,4,-7,3,12,9]

console.log(findSubZero(list));
