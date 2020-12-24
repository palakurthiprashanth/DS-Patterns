function find_averages_of_subarrays (arr, k) {
    let windowStart= 0;
    let result= [];
    let sum= 0;

    for (var windowEnd=0; windowEnd<arr.length;windowEnd++) {
        sum= sum+arr[windowEnd];

        if (windowEnd >= k-1) {
            result.push(sum/k);
            sum= sum-arr[windowStart];
            windowStart= windowStart+1;
        }
    }

    return result;
}
console.log(find_averages_of_subarrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]
