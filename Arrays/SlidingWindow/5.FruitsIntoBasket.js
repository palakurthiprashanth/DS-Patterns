/**
Problem Statement #
Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in 
each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop 
when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.

Example 1:

Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

**/


Solution #
This problem follows the Sliding Window pattern and is quite similar to Longest Substring with K Distinct Characters. In this problem, 
we need to find the length of the longest subarray with no more than two distinct characters (or fruit types!). This transforms the current problem into 
Longest Substring with K Distinct Characters where K=2.
