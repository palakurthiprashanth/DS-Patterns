/**
Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

Example 1:

Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
Output: [2, 3], [5, 6], [7, 7]
Explanation: The output list contains the common intervals between the two lists.
**/

function intervalIntersection (intervals_a, intervals_b) {
    let i= 0;
    let j= 0;
    let result= [];

    while (i< intervals_a.length && j < intervals_b.length) {
        let a_overlaps_b = intervals_a[i].start >= intervals_b[j].start && intervals_a[i].start <= intervals_b[j].end;
        let b_overlaps_a = intervals_b[j].start >= intervals_a[i].start && intervals_b[j].start <= intervals_a[i].end;

        if (a_overlaps_b || b_overlaps_a) {
            result.push(new Interval(Math.max(intervals_a[i].start, intervals_b[j].start), Math.min(intervals_a[i].end, intervals_b[j].end)));
        }

        if (intervals_a[i].end < intervals_b[j].end) {
            i += 1;
        } else {
            j += 1;
        }
    }
    return result;
}
