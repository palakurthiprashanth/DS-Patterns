function findWater(arr) {
    let left= [];
    let right= [];

    left[0]= arr[0];
    right[arr.length-1]= arr[arr.length-1];

    let waterStorage= 0;

    for (var i=1;i<arr.length;i++) {
        left[i]= Math.max(arr[i], left[i-1]);
    }

    for (var i= arr.length-2; i>=0;i--) {
        right[i]= Math.max(arr[i], right[i+1]);
    }

    for (var i=0;i<arr.length;i++) {
        waterStorage+= Math.min(left[i], right[i])-arr[i];
    }
    return waterStorage;
}
console.log(findWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));//6

// TC: O(N).
// SC: O(N).
