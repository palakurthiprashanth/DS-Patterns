//https://www.geeksforgeeks.org/sum-minimum-maximum-elements-subarrays-size-k/

/**
Input : arr[] = {2, 5, -1, 7, -3, -1, -2}  
        K = 4
Output : 18
Explanation : Subarrays of size 4 are : 
     {2, 5, -1, 7},   min + max = -1 + 7 = 6
     {5, -1, 7, -3},  min + max = -3 + 7 = 4      
     {-1, 7, -3, -1}, min + max = -3 + 7 = 4
     {7, -3, -1, -2}, min + max = -3 + 7 = 4   
     Sum of all min & max = 6 + 4 + 4 + 4 
                          = 18     
**/

function SumOfKsubArray(arr, k) {
    let firstElMax= new Dequeue();
    let firstElMin= new Dequeue();

    let sum= 0;

    // process for first window size.
    for (var i=0; i<k; i++) {
        while(firstElMax.isEmpty() === false && arr[i] >=arr[firstElMax.getBack()]) {
            firstElMax.deleteAtBack();
        }

        while(firstElMin.isEmpty() === false && arr[i] <=arr[firstElMin.getBack()]) {
            firstElMin.deleteAtBack();
        }

        firstElMax.insertAtBack(i);
        firstElMin.insertAtBack(i);
    }

    for (var i=k; i<arr.length;i++) {
        sum= sum+ arr[firstElMax.getFront()]+ arr[firstElMin.getFront()];

        // remove elements that are outside window from bot dequeues.
        while(firstElMax.isEmpty() === false && firstElMax.getFront() === i-k) {
            firstElMax.deleteAtFront();
        }

        while(firstElMin.isEmpty() === false && firstElMin.getFront() === i-k) {
            firstElMin.deleteAtFront();
        }

        // remove previous elements that are useless.
        while(firstElMax.isEmpty() === false && arr[i] >=arr[firstElMax.getBack()]) {
            firstElMax.deleteAtBack();
        }

        while(firstElMin.isEmpty() === false && arr[i] <=arr[firstElMin.getBack()]) {
            firstElMin.deleteAtBack();
        }

        firstElMax.insertAtBack(i);
        firstElMin.insertAtBack(i);

    }
    sum= sum+ arr[firstElMax.getFront()]+arr[firstElMin.getFront()];
    return sum;
}

console.log(SumOfKsubArray([2, 5, -1, 7, -3, -1, -2], 4));
