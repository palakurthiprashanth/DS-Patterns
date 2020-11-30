// https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room/0

class Meeting {
    constructor(start, end, position) {
        this.start= start;
        this.end= end;
        this.position= position;
    }
}

function activity_selection(start, end) {
    let meetings= [];
    for (var i=0;i<start.length;i++) {
        meetings.push(new Meeting(start[i], end[i], i+1)); // i starts with 0;
    }
    activity_selection_helper(meetings);
}

function activity_selection_helper(meetings) {
    // Ascending order if end.
    meetings.sort((a,b)=> {
        return a.end > b.end ?1 :-1;
    });
    let meetingsLength= meetings.length;
    let time_limit= 0;
    let result= [];

    // initializing
    time_limit= meetings[0].end;
    result.push(meetings[0].position);

    for (var i=1; i<meetingsLength;i++) {
        if (meetings[i].start > time_limit) {
            result.push(meetings[i].position);
            time_limit= meetings[i].end;
        }
    }
    console.log(result);
    return result;
}



let start= [1, 3, 0, 5, 8, 5];
let finish= [2, 4, 6, 7, 9, 9];
activity_selection(start, finish);// 1245.
