/**
Input: [7, 3, 5, 8, 5, 3, 3], and K=2
Output: 3
Explanation: We can remove two occurrences of 3 to be left with 3 distinct numbers [7, 3, 8], we have 
to skip 5 because it is not distinct and occurred twice. 
Another solution could be to remove one instance of '5' and '3' each to be left with three 
distinct numbers [7, 5, 8], in this case, we have to skip 3 because it occurred twice.
**/


function find_maximum_distinct_elements(nums, k) {
    let distintElementsCount= 0;
    let freqMap= {};

    for (var i=0;i<nums.length;i++) {
        if (nums[i] in freqMap) {
            freqMap[nums[i]]++;
        }else {
            freqMap[nums[i]]= 1;
        }
    };

    let minHeap= new Heap(function(a, b) {
        return b-a;
    });

    Object.keys(freqMap).forEach(function(num) {
        if (freqMap[num] ===1) {
            distintElementsCount+=1;
        }else {
            minHeap.push(freqMap[num]);
        }
    });

    while(k >0 && minHeap.length() >0) {
        let freq= minHeap.pop();

        k-= freq-1;
        if (k>0) {
            distintElementsCount+=1;
        }

    }

    if (k>0) {
        distintElementsCount-=k;
    }
    return distintElementsCount;
}
console.log(`Maximum distinct numbers after removing K numbers: ${
  find_maximum_distinct_elements([7, 3, 5, 8, 5, 3, 3], 2)}`);// 3
  
  
  /**
  Time complexity #
Since we will insert all numbers in a HashMap and a Min Heap, this will take O(N*logN)O(N∗logN) where ‘N’ is the total input numbers. 
While extracting numbers from the heap, in the worst case, we will need to take out ‘K’ numbers. This will happen when we have at least ‘K’ numbers 
with a frequency of two. Since the heap can have a maximum of ‘N/2’ numbers, therefore, extracting an element from the heap will take O(logN)
and extracting ‘K’ numbers will take O(KlogN)O(KlogN). So overall, the time complexity of our algorithm will be O(N*logN + KlogN).

We can optimize the above algorithm and only push ‘K’ elements in the heap, as in the worst case we will be extracting ‘K’ elements from the heap. This optimization will reduce the overall time complexity to O(N*logK + KlogK).O(N∗logK+KlogK).

Space complexity #
The space complexity will be O(N) as, in the worst case, we need to store all the ‘N’ characters in the HashMap.
  **/
