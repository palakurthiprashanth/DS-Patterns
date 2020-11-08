// Given a string, sort it based on the decreasing frequency of its characters.

function sort_character_by_frequency(str) {
    let sortedString= [];
    let maxHeap= new Heap(function(a, b) {
        return a[0]-b[0];
    });

    let freqMap= {};
    for (var i=0;i<str.length;i++) {
        if (str[i] in freqMap) {
            freqMap[str[i]]++;
        }else {
            freqMap[str[i]]= 1;
        }
    }

    Object.keys(freqMap).forEach(function(character) {
        maxHeap.push([freqMap[character], character]);
    });

    while(maxHeap.length() >0) {
        const [freq, character]= maxHeap.pop();
        for (var i=0;i<freq;i++) {
            sortedString.push(character);
        }
    }

    return sortedString.join('');
}

console.log(`String after sorting characters by frequency: ${sort_character_by_frequency('abcbab')}`);// bbbaac
