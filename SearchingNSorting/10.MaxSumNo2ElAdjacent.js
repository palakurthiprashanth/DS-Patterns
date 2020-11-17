/**

A step array is an array of integer where each element has a difference of at most k with its neighbor. Given a key x, we need to find the index value of x 
if multiple element exist return the first occurrence of the key.

Examples:

Input : arr[] = {4, 5, 6, 7, 6}
           k = 1
           x = 6
Output : 2
The first index of 6 is 2.

**/

function maxSteal(costs) {
    let dp= [];
    dp[0]= costs[0];
    dp[1]= Math.max(costs[0], costs[1]);// ignore current House or steal current house.

    // For remaining Houses.
    for (var i=2;i<costs.length;i++) {
        dp[i]= Math.max(dp[i-1], dp[i-2]+costs[i]);
    }
    return dp[costs.length-1];
}
console.log(maxSteal([6, 7, 1, 3, 8, 2, 4]));// 19.
