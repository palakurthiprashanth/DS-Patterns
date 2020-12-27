/**
We are given a list of Jobs. Each job has a Start time, an End time, and a CPU load when it is running. Our goal is to find the maximum CPU load at any 
time if all the jobs are running on the same machine.

Example 1:

Jobs: [[1,4,3], [2,5,4], [7,9,6]]
Output: 7
Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU load (3+4=7) will be when both the 
jobs are running at the same time i.e., during the time interval (2,4).
Example 2:

Jobs: [[6,7,10], [2,4,11], [8,12,15]]
Output: 15
Explanation: None of the jobs overlap, therefore we will take the maximum load of any job which is 15.

**/

class Job {
    constructor(start, end, cpuLoad) {
        this.start= start;
        this.end= end;
        this.cpuLoad= cpuLoad;
    };
}

function find_max_cpu_load(jobs) {
    jobs.sort(function(a, b) {
        return a.start-b.start;
    });

    let maxCpuLoad= 0;
    let currentCpuLoad= 0;

    let minHeap= new Heap(function(a, b) {
        return a.end - b.end;
    });

    for (var j=0;j<jobs.length;j++) {
        while (minHeap.length() >0 && jobs[j].start >= minHeap.peek().end) {
            currentCpuLoad-= minHeap.pop().cpuLoad;
        }

        minHeap.push(jobs[j]);
        currentCpuLoad= currentCpuLoad+jobs[j].cpuLoad;
        maxCpuLoad= Math.max(currentCpuLoad, maxCpuLoad);
    }

    return maxCpuLoad;
}
console.log(`Maximum CPU load at any time: ` +
  `${find_max_cpu_load([new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])}`);// 7.
