/**
For ‘K’ employees, we are given a list of intervals representing each employee’s working hours. Our goal is to determine if there is a free interval 
which is common to all employees. You can assume that each list of employee working hours is sorted on the start time.

Example 1:

Input: Employee Working Hours=[[[1,3], [5,6]], [[2,3], [6,8]]]
Output: [3,5]
Explanation: All the employees are free between [3,5].
Example 2:

Input: Employee Working Hours=[[[1,3], [9,12]], [[2,4]], [[6,8]]]
Output: [4,6], [8,9]
Explanation: All employees are free between [4,6] and [8,9].
Example 3:

Input: Employee Working Hours=[[[1,3]], [[2,4]], [[3,5], [7,9]]]
Output: [5,7]
Explanation: All employees are free between [5,7].

**/

One simple solution can be to put all employees’ working hours in a list and sort them on the start time. Then we can iterate through the list to find the gaps. 
Let’s dig deeper. Sorting the intervals of the above example will give us:

[1,3], [2,4], [6,8], [9,12]
We can now iterate through these intervals, and whenever we find non-overlapping intervals (e.g., [2,4] and [6,8]), 
we can calculate a free interval (e.g., [4,6]). This algorithm will take O(N * logN)O(N∗logN) time, where ‘N’ is the total number of intervals. 
This time is needed because we need to sort all the intervals. The space complexity will be O(N)O(N), which is needed for sorting.
