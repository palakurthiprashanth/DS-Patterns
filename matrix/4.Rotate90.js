// https://www.youtube.com/watch?v=SoxrXQbhCPI

function rotate90(arr) {
    // Transpose.
    for (var i=0;i<arr.length;i++) {
        for (var j=i;j<arr[0].length;j++) {
            let temp= arr[i][j];
            arr[i][j]= arr[j][i];
            arr[j][i]= temp;
        }
    };

    // Reverse.
    for (var i=0; i< arr.length;i++) {
        let leftIdx= 0;
        let rightIdx= arr[i].length-1;

        while (leftIdx < rightIdx) {
            let temp= arr[i][leftIdx];
            arr[i][leftIdx]= arr[i][rightIdx];
            arr[i][rightIdx]= arr[i][leftIdx];
            leftIdx--;
            rightIdx++;
        }
    }
}
