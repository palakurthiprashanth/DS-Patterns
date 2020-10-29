
// https://www.youtube.com/watch?v=sa1YWgMzXLc


class Cordinate {
    constructor(x, y) {
        this.x= x;
        this.y= y;
    }
}

function timeToRotOranges(mat) {
    let count= 0;
    let incrementCount= false;

    let ROW= 4;
    let COLUMN= 5;

    let queue= new Queue();

    // pushing rotten oranges cordinates to queue.
    for (var i=0;i <ROW;i++) {
        for (var j=0; j<COLUMN;j++) {
            if (mat[i][j] === 2) {
                queue.enqueue(new Cordinate(i, j));
            }
        }
    }
    // add Delimiter to indicate end of one time frame.
    queue.enqueue(new Cordinate(-1,-1));

    while(queue.isEmpty() === false) {

        // remove from queue until reaches (-1,-1).
        while (!peekDelimiter(queue.getTop())) {
            let cordinates= queue.dequeue();

            // making neighbouring fresh oranges to rotten.

            // making top fresh orange to rotten if any.
            if (isFreshOrange(mat, cordinates.x-1, cordinates.y)) {
                mat[cordinates.x-1][cordinates.y]= 2;// making rotten.
                queue.enqueue(new Cordinate(cordinates.x-1, cordinates.y));

                if (!incrementCount) {
                    incrementCount= true;
                    count++;
                }
            }

            // making right fresh orange to rotten if any.
            if (isFreshOrange(mat, cordinates.x, cordinates.y+1)) {
                mat[cordinates.x][cordinates.y+1]= 2;// making rotten.
                queue.enqueue(new Cordinate(cordinates.x, cordinates.y+1));

                if (!incrementCount) {
                    incrementCount= true;
                    count++;
                }
            }

            // making left fresh orange to rotten if any.
            if (isFreshOrange(mat, cordinates.x, cordinates.y-1)) {
                mat[cordinates.x][cordinates.y-1]= 2;// making rotten.
                queue.enqueue(new Cordinate(cordinates.x, cordinates.y-1));

                if (!incrementCount) {
                    incrementCount= true;
                    count++;
                }
            }

            // making down fresh orange to rotten if any.
            if (isFreshOrange(mat, cordinates.x+1, cordinates.y)) {
                mat[cordinates.x+1][cordinates.y]= 2;// making rotten.
                queue.enqueue(new Cordinate(cordinates.x+1, cordinates.y));

                if (!incrementCount) {
                    incrementCount= true;
                    count++;
                }
            }
        }
        queue.dequeue(); // removing delimiter (-1,-1)
        incrementCount= false; // resetting value.

        if (queue.isEmpty() === false) {
            queue.enqueue(new Cordinate(-1, -1));
        }
    }

    // once queue is empty check if there are any fresh oranges or not.

    return isThereAnyFreshOranges(mat) ? -1: count;
}

function peekDelimiter(cordinates) {
    return cordinates.x===-1 && cordinates.y === -1;
}

function isFreshOrange(mat, x, y) {
    return x >= 0 && x < 4
        && y >= 0 && y < 5
        && mat[x][y] == 1; 
}

function isThereAnyFreshOranges(mat) {
    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 5; j++) {
        if(mat[i][j] == 1) {
          return true; 
        }
      }
    }
    return false;
}

let mat = [
        [ 0, 2, 0, 0, 2 ],
        [ 0, 1, 0, 1, 1 ],
        [ 0, 1, 0, 1, 2 ],
        [ 2, 1, 0, 2, 0 ]
        ];

console.log(timeToRotOranges(mat));
