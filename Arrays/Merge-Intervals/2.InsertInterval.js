function insert(intervals, newInterval) {
    let merged= [];
    let i=0;

    // Intervals before new interval.
    while (i < intervals.length && intervals[i].end < newInterval.start) {
        merged.push(intervals[i]);
        i+=1;
    }
    // Overlapping intervals.
    while(i<intervals.length && intervals[i].start <= newInterval.end) {
        newInterval.start= Math.min(intervals[i].start, newInterval.start);
        newInterval.end= Math.max(intervals[i].end, newInterval.end);
        i+=1;
    }
    merged.push(newInterval);

    // After new interval.
    while (i < intervals.length) {
        merged.push(intervals[i]);
        i+=1;
    }
    return merged;
}
console.log(insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 6)));
