/**
Problem Statement #
Given a string, find if its letters can be rearranged in such a way that no two same characters come next to each other.

Example 1:

Input: "aappp"
Output: "papap"
Explanation: In "papap", none of the repeating characters come next to each other.

**/

function rearrange_string(str) {
    let freqMap= {};

    for (var i=0;i<str.length;i++) {
        if (str[i] in freqMap) {
            freqMap[str[i]]++;
        }else {
            freqMap[str[i]]= 1;
        }
    }

    let maxHeap= new Heap(function(a, b) {
        return a[0]-b[0];
    });

    Object.keys(freqMap).forEach(function(character) {
        maxHeap.push([freqMap[character], character]);
    });

    let prevFrequency= 0;
    let prevChar= null;
    let result= [];
    while(maxHeap.length() > 0) {
        const [frequency, character]= maxHeap.pop();

        if(prevFrequency >0 && prevChar!==null) {
            maxHeap.push([prevFrequency, prevChar]);
        }

        result.push(character);
        prevChar= character;
        prevFrequency= frequency-1;
    }

    if (result.length === str.length) {
        return result.join('');
    }
    return '';
}
console.log(`Rearranged string:  ${rearrange_string('aappp')}`);// papap

/**
Time complexity #
The time complexity of the above algorithm is O(N*logN) where ‘N’ is the number of characters in the input string.

Space complexity #
The space complexity will be O(N), as in the worst case, we need to store all the ‘N’ characters in the HashMap.
**/
