/**
Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.

Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest 
letter in the given array is greater than the last letter of the array and is also the first letter of the array.

Write a function to return the next letter of the given ‘key’.

Example 1:

Input: ['a', 'c', 'f', 'h'], key = 'f'
Output: 'h'
Explanation: The smallest letter greater than 'f' is 'h' in the given array.

**/

function findNextLetter(letters, key) {
    let start= 0;
    let end= letters.length-1;
    let length= letters.length;

    if (key < letters[0] || key > letters[end]) {
        return letters[0];
    }

    while (start <=end) {
        let midIndex= Math.floor(start+(end-start)/2);
        if (key <letters[midIndex]) {
            end= midIndex-1;
        }else {
            start= midIndex+1;
        }
    }

    return letters[start%length];
}
console.log(findNextLetter(['a', 'c', 'f', 'h'], 'f')); // h
console.log(findNextLetter(['a', 'c', 'f', 'h'], 'b'));// c
console.log(findNextLetter(['a', 'c', 'f', 'h'], 'm'));// a
