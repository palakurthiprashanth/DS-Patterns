function rowWithMax1(arr, row, column) {
    let max_row_index= 0;
    let maximum= -1;
    for (var i=0; i< row;i++ ) {
        let index= binarySearchForFirst1(arr[i], 0, column-1);
        if (index !==-1 && (column-index) > maximum) {
            max_row_index= i;
            maximum= column-index;
        }
    }
    return max_row_index;
}

function binarySearchForFirst1(arr, low, high) {
    while(low <=high) {
        let mid= Math.floor(low + (high-low)/2);
        if ( mid ===0 || arr[mid-1] === 0 && arr[mid] ===1) {
            return mid;
        }

        if (arr[mid] === 0) {
            low= mid+1;
        }else {
            high= mid -1;
        }
    }
    return -1;
}

let matrix= [[ 0, 0, 0, 1 ], 
          [ 0, 1, 1, 1 ], 
           [ 1, 1, 1, 1 ], 
            [ 0, 0, 0, 0 ] ];
console.log(rowWithMax1(matrix, 4, 4)); // 2.
