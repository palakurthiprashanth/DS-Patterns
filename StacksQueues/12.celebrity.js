/**
https://www.geeksforgeeks.org/the-celebrity-problem/

In a party of N people, only one person is known to everyone. Such a person may be present in the party, if yes, (s)he doesn’t know anyone in the party. 
We can only ask questions like “does A know B? “. Find the stranger (celebrity) in the minimum number of questions.

Main points

If A knows B, then A can’t be a celebrity. Discard A, and B may be celebrity.
If A doesn’t know B, then B can’t be a celebrity. Discard B, and A may be celebrity.

**/


// celebrity problem.

function findCelebrity(celebrityArray) {
    debugger;
    let n= celebrityArray.length;
    let stack= new Stack();

    for (var i=0; i<n; i++) {
        stack.push(i);
    }

    while (stack.length() >1) {
        let a= stack.pop();
        let b= stack.pop();
        if (knows(a,b, celebrityArray)) {
            // A knows B, B can be celebrity.
            stack.push(b);
        }else {
            // A doesnt know B , so A can be celebrity.
            stack.push(a);
        }
    }

    let c= stack.pop();

    // check if c is celebrity.
    // person cannot know himself (i!==c)
    // celebrity should not know anyone.(!knows(c,i))
    // everyone should know celebrity.(know(i,c))

    for (var i=0;i<n;i++) {
        if (i!==c && (knows(i,c, celebrityArray) || !knows(c,i, celebrityArray))) {
            return c; // return celebrity ID.
        }
    }
    return -1;
}

function knows(a, b, array) {
    let celebrityArray= array;

    if (celebrityArray[a][b] === 1) {
        // a knows b. So B can be celebrity.
        return true;
    }else if (celebrityArray[a][b] ===0) {
        // a doesnt know b. So a can be celebrity.
        return false
    }
}


let arr= [
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0]
];
console.log(findCelebrity(arr));

// TC= O(n).
