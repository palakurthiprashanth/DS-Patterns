function sortArrayRecursion(arr, length) {
    if (length === 1) {
        return;
    }

    sortArrayRecursion(arr, length-1);
    let numberTobeSorted= arr[length-1];
    let leftOfnumberTobeSorted= length-2;

    while(leftOfnumberTobeSorted >=0 && arr[leftOfnumberTobeSorted] > numberTobeSorted) {
        arr[leftOfnumberTobeSorted+1]= arr[leftOfnumberTobeSorted];
        leftOfnumberTobeSorted--;
    }
    arr[leftOfnumberTobeSorted+1]= numberTobeSorted;
}
let t= [5,4,3,2,1];
sortArrayRecursion(t,5);
console.log(t);
