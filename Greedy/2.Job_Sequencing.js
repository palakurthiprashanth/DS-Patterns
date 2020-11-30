// https://www.gatevidyalay.com/job-sequencing-with-deadlines/
// https://www.youtube.com/watch?v=zPtI8q9gvX8

function JobSequencing(jobs) {
    // Descending order of Profits.
    jobs.sort((a,b)=>{
        return a.profit > b.profit ?-1: 1;
    });
    
    let result= [];
    let jobsLength= jobs.length;
    let slots= [];
    for (var i=0;i<jobsLength;i++) {
        slots[i]= false;
    }

    for (var i=0;i< jobsLength;i++) {
        // check if slot is free for that deadline.
        for (var j=jobs[i].deadline-1; j>=0; j--) {
            // If slot is available.
            if (slots[j] === false) {
                slots[j]= true;
                result[j]= jobs[i].id;
                break;
            }
        }
    }

    // print job ids.
    let res= "";
    for (var i=0;i<slots.length;i++) {
        if (slots[i]) {
            res+="|"+result[i]+"|"
        }
    };
    console.log(res);
    return res;
}
let jobs= [{
    id: 'a',
    deadline: 2,
    profit: 100
},{
    id: 'b',
    deadline: 1,
    profit: 19
},{
    id: 'c',
    deadline: 2,
    profit: 27
},{
    id: 'd',
    deadline: 1,
    profit: 25
},{
    id: 'e',
    deadline: 3,
    profit: 15
}]
JobSequencing(jobs); // c, a, e

// Time Complexity of the above solution is O(n2). It can be optimized using Disjoint Set Data Structure. Please refer below post for details.
