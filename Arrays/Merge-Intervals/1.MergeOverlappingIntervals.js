class Interval {
    constructor(start, end) {
        this.start= start;
        this.end= end;
    }
}

function merge(intervals) {
    if (intervals.length <2) {
        return intervals;
    }

    intervals.sort(function(a, b) {
        return a.start - b.start;
    })

    let mergedIntervals= [];

    let start= intervals[0].start;
    let end= intervals[0].end;

    for (var i=1;i<intervals.length;i++) {
        let interval= intervals[i];
        if (interval.start <= end) {
            end= Math.max(interval.end, end);
        }else {
            mergedIntervals.push(new Interval(start, end));
            start= interval.start;
            end= interval.end;
        }
    }
    mergedIntervals.push(new Interval(start, end));
    return mergedIntervals;
}
console.log(merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]));

// TC: O(Nlogn).
// SC: O(N).

