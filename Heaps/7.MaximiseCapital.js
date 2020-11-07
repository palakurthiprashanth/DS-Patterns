/**
Problem Statement #
Given a set of investment projects with their respective profits, we need to find the most profitable projects. We are given an initial capital and are allowed to invest only in a fixed number of projects. Our goal is to choose projects that give us the maximum profit. Write a function that returns the maximum total capital after selecting the most profitable projects.

We can start an investment project only when we have the required capital. Once a project is selected, we can assume that its profit has become our capital.

Example 1:

Input: Project Capitals=[0,1,2], Project Profits=[1,2,3], Initial Capital=1, Number of Projects=2
Output: 6
Explanation:

With initial capital of ‘1’, we will start the second project which will give us profit of ‘2’. Once we selected our first project, our total capital will become 3 (profit + initial capital).
With ‘3’ capital, we will select the third project, which will give us ‘3’ profit.
After the completion of the two projects, our total capital will be 6 (1+2+3).

Example 2:

Input: Project Capitals=[0,1,2,3], Project Profits=[1,2,3,5], Initial Capital=0, Number of Projects=3
Output: 8
Explanation:

With ‘0’ capital, we can only select the first project, bringing out capital to 1.
Next, we will select the second project, which will bring our capital to 3.
Next, we will select the fourth project, giving us a profit of 5.
After selecting the three projects, our total capital will be 8 (1+2+5).
==================================================================================================================================================================
**/

function find_maximum_capital(capitals, profits, numberofProjects, initialCapital) {
    let minCapital= new Heap(function(a, b) {
        return b[0]-a[0];
    });

    let maxProfits= new Heap(function(a, b) {
        return a[0]-b[0];
    });

    for (var i=0;i<capitals.length;i++) {
        minCapital.push([capitals[i], i]);
    }

    let availableCapital= initialCapital;
    debugger;

    // As we can select only 3 projects.
    for (var i=0; i<numberofProjects;i++) {
        // select project with max profit, we can use max heap as it is best choice.

        while(minCapital.elements >0 && minCapital.peek()[0] <= availableCapital) {
            const [capital, index]= minCapital.pop();
            maxProfits.push([profits[index], index]);
        }

        // we cannot find any projects within budget.
        if (maxProfits.elements === 0) {
            break;
        }

        availableCapital= availableCapital+maxProfits.pop()[0];
    }
    return availableCapital;
}
console.log(`Maximum capital: ${find_maximum_capital([0, 1, 2], [1, 2, 3], 2, 1)}`);

/**
Time complexity #
Since, at the most, all the projects will be pushed to both the heaps once, the time complexity of our algorithm is O(NlogN + KlogN), 
where ‘N’ is the total number of projects and ‘K’ is the number of projects we are selecting.

Space complexity #
The space complexity will be O(N) because we will be storing all the projects in the heaps.
**/
