function printMazePath(maze) {
    let finalPath= new Array(4).fill(0).map(() => new Array(4).fill(0));
    if (!printMazePathUtil(maze, 0, 0, 4, finalPath)) {
        console.log("Rat cant reach end.");
        return false;
    }
    console.log(finalPath);
    return true;
};

function isSafe(maze, x, y, N) {
    if (x >=0 && x< N && y>=0 && y < N && maze[x][y]===1) {
        return true;
    }
    return false;
}

function printMazePathUtil(maze, x, y, N, finalPath) {
    if (x === N-1 && y === N-1 && maze[x][y] === 1) {
        finalPath[x][y]=1;
        return true;
    };

    // if it is safe path.
    if (isSafe(maze, x, y, N)) {
        finalPath[x][y]= 1;

        // if path exists in down.
        if (printMazePathUtil(maze, x+1, y, N, finalPath)) {
            return true;
        }

        // if path exists right
        if (printMazePathUtil(maze, x, y+1, N, finalPath)) {
            return true;
        }
        finalPath[x][y]=0;
    }
    return false;
}

let maze= [[1, 0, 0, 0], 
        [1, 1, 1, 0], 
        [1, 0, 1, 1], 
        [0, 0, 0, 1]];
 printMazePath(maze);
