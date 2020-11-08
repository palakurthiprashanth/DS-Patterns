function find_k_frequent_numbers(nums, k) {
    let freqMap= {};
    let topNumbers= [];

    for (var i=0;i<nums.length;i++) {
        if (nums[i] in freqMap) {
            freqMap[nums[i]]++;
        }else {
            freqMap[nums[i]]= 1;
        }
    }

    let minHeap= new Heap(function(a,b) {
        return b[0]-a[0];
    });

    Object.keys(freqMap).forEach(function(number) {
        minHeap.push([freqMap[number], number]);
        if (minHeap.length() > k) {
            minHeap.pop();
        }
    });
    
    while(minHeap.length() >0) {
        topNumbers.push(minHeap.pop()[1]);
    }

    return topNumbers;
}
console.log(`Here are the K frequent numbers: ${
  find_k_frequent_numbers([1, 3, 5, 12, 11, 12, 11], 2)}`); // 12,11

  console.log(`Here are the K frequent numbers: ${
  find_k_frequent_numbers([5, 12, 11, 3, 11], 2)}`);  // 12,11
