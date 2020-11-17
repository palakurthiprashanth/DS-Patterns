function findWhereAdjacentDifferByAtMostk(arr, k, value) {
    let start= 0;
    while(start < arr.length) {
        if (arr[start] === value) {
            return start;
        }
        // As each element is differ by atmost k, we can find next index so we can skip
        // un wanted elements.
        let diff= Math.abs((arr[start]-value)/k);
        // move next index by atleast 1 element.
        diff= Math.max(1, diff);

        start= start+diff;
    }
    return -1;
}
console.log(findWhereAdjacentDifferByAtMostk([70, 60, 70, 80, 90, 110, 130],20, 110));//5

//TC: O(N) , but it is optimised as we are skipping un-wanted elements.
