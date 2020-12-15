https://thecodingsimplified.com/n-queen-problem/

function NQueenMain() {
     let N= 4;
     // new Array(4).fill(0).map(() => new Array(4).fill(0));
     let solution= new Array(4).fill(0).map(() => new Array(4).fill(0));

     if (!queenProbUtil(0, solution, N)) {
         console.log("No Solution.");
         return false;
     }
     // print solution.
     console.log(solution);
     return true;
 }

 function queenProbUtil(column, solution, N) {
     // Terminating  Condition.
     if (column >= N) {
         return true;
     }

     for (var row= 0; row <N; row++) {
         if (isSafeToPlaceQueen(row, column, N, solution)) {
             solution[row][column]= 1;

             // As row is filled , we will not keep in same row.
             if (queenProbUtil(column+1, solution, N)) {
                 return true;
             };

             // Backtrack.
             solution[row][column]= 0;
         }
     }
     return false;
 }

 function isSafeToPlaceQueen(row, column, N, solution) {
     var i, j;

     for (i=0;i<column;i++) {
         if (solution[row][i] === 1) {
             return false;
         }
     }

     // diagonal on left side and upward direction.
     for (i= row,j=column;i>=0 && j>=0; i--,j--) {
         if (solution[i][j] === 1) {
             return false;
         }
     }

     // diagonal on left side and down direction.
     for (i=row,j=column;i<N && j>=0; i++,j--) {
         if (solution[i][j]===1) {
             return false;
         }
     }
     return true;
 }
 NQueenMain();
