function longest_substring_with_k_distinct(str, k) {
    let windowStart= 0;
    let freqMap= {};
    let maxLength= 0;

    for (var windowEnd=0; windowEnd<str.length;windowEnd++) {
        let rightChar= arr[windowEnd];

        if (rightChar in freqMap) {
            freqMap[rightChar]++;
        }else {
            freqMap[rightChar]= 1;
        }

        if (Object.keys(freqMap).length > k) {
            let leftChar= arr[windowStart];
            freqMap[leftChar]-=1;
            if (freqMap[leftChar] === 0) {
                delete freqMap[leftChar];
            }
            windowStart+=1;
        }
        maxLength= Math.max(maxLength, windowEnd-windowStart+1);
    }
    return maxLength;
}
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);// 4

// TC: O(N).
// SC: O(k+1).
