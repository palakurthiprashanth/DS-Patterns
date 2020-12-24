function smallest_subarray_with_given_sum(arr, S) {
    let windowStart= 0;
    let windowSum= 0;
    let minLength= Number.POSITIVE_INFINITY;

    for (var windowEnd=0; windowEnd<arr.length;windowEnd++) {
        windowSum= windowSum+arr[windowEnd];

        while (windowSum >= S) {
            minLength= Math.min(minLength, windowEnd-windowStart+1);
            windowSum-=arr[windowStart];
            windowStart+=1;
        }
    }
    if (minLength=== Number.POSITIVE_INFINITY) {
            return 0;
        }

        return minLength;
}
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum([2, 1, 5, 2, 3, 2], 7)}`); //2

/**
TC:
The time complexity of the above algorithm will be O(N). The outer for loop runs for all elements, and the inner while loop processes each element only once; 
therefore, the time complexity of the algorithm will be O(N+N)O(N+N), which is asymptotically equivalent to O(N).
**/
