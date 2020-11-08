/**
Rearrange String K Distance Apart #
Given a string and a number ‘K’, find if the string can be rearranged such that the same characters are at least ‘K’ distance apart from each other.

Example 1:

Input: "mmpp", K=2
Output: "mpmp" or "pmpm"
Explanation: All same characters are 2 distance apart.
**/

function reorganize_string(str, k) {
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

    let queue= new Queue();
    let result= [];

    while(maxHeap.length() >0) {
        const [freq, character]= maxHeap.pop();

        result.push(character);
        queue.enqueue([freq-1, character]);

        if (queue.length() === k) {
            let [f1, c1]= queue.dequeue();
            if (f1 >0) {
                maxHeap.push([f1, c1]);
            }
        }

    }

    if (result.length === str.length) {
        return result.join('');
    }

    return '';
}
console.log(`Reorganized string: ${reorganize_string('mmpp', 2)}`);// mpmp
