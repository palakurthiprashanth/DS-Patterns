function missingElementAP(arr) {
    let n= arr.length;
    let commonDifference= (arr[n-1]-arr[0])/n;
    let low= 0;
    let hight= n-1;

    while(low <high) {
        let mid= Math.floor(low+(high-low)/2);
        // if mid and the immediate next element to mid are not in AP, then missing
        // element is arr[mid] + d.
        if (arr[mid+1] - arr[mid] !==commonDifference) {
            return arr[mid]+commonDifference;
        }

         // if mid and the immediate previous element to mid are not in AP, then missing
        // element is arr[mid-1] + d.
        if (mid > 0 && arr[mid]-arr[mid-1]!==commonDifference) {
            return arr[mid-1]+commonDifference;
        }
         // if elements of the left half are in AP, then missing element is in right
        // half.
        if (arr[mid] === arr[0]+mid*commonDifference) {
            low= mid+1;
        }else {
            high= mid-1;
        }
    }
    // Invalid Input
    return Number.MAX_VALUE;
}
// TC: O(logn).
