function spiralTraversal(arr, i, j, row, column) {
    debugger;
    if (i >= row || j >= column) {
        return;
    };

    // Printing first row.
    for (var p=i; p<column; p++) {
        console.log(arr[i][p]);
    }

    // print last column.
    for (var c= i+1; c< row; c++) {
        console.log(arr[c][column-1]);
    }

    // print last row if last and first row are not equal.
    if ((row-1) !==i) {
        for (var l=column-2;l>=j;l--) {
            console.log(arr[row-1][l]);
        }
    }

    // print first column , if last and first are not equal.
    if ((column-1)!==j) {
        for (var c=row-2;c >i;c--) {
            console.log(arr[c][j]);
        }
    }
    spiralTraversal(arr, i+1, j+1, row-1, column-1);
}

var sp= [[ 1, 2, 3, 4 ], 
          [ 5, 6, 7, 8 ], 
          [ 9, 10, 11, 12 ], 
          [13, 14, 15, 16 ]
        ];
spiralTraversal(sp, 0, 0, 4, 4);// 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10 
