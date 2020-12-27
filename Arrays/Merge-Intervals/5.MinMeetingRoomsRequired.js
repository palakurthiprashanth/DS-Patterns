/**
Minimum Meeting Rooms (hard) #
Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.

Example 1:

Meetings: [[1,4], [2,5], [7,9]]
Output: 2
Explanation: Since [1,4] and [2,5] overlap, we need two rooms to hold these two meetings. [7,9] can 
occur in any of the two rooms later.
Example 2:

Meetings: [[6,7], [2,4], [8,12]]
Output: 1
Explanation: None of the meetings overlap, therefore we only need one room to hold all meetings.
**/

class Meeting {
    constructor(start, end) {
        this.start= start;
        this.end= end;
    }
}

function min_meeting_rooms(meetings) {
    meetings.sort(function(a, b) {
        return a.start-b.start
    });

    let minHeap= new Heap(function(a, b) {
        return b.end-a.end;
    });

    let minMeetingRooms= 0;

    for (var i=0;i<meetings.length;i++) {
        while(minHeap.length() >0 && meetings[i].start >= minHeap.peek().end) {
            minHeap.pop();
        }

        minHeap.push(meetings[i]);

        minMeetingRooms= Math.max(minMeetingRooms, minHeap.length());
    }
    return minMeetingRooms;
}

console.log(`Minimum meeting rooms required: ` +
  `${min_meeting_rooms([new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`); //2
  
 // TC: O(NlogN).
 // SC: O(N).
