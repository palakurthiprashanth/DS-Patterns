/**
https://www.geeksforgeeks.org/length-of-the-longest-valid-substring/

Input : ((()
Output : 2
Explanation : ()

Input: )()())
Output : 4
Explanation: ()() 

Input:  ()(()))))
Output: 6
Explanation:  ()(())
**/

function lengthOfLongestSubstring(str) {
    let stack= new Stack();
    stack.push(-1);
    let result= 0;

    for (var i=0;i<str.length;i++) {
        if (str[i]==='(') {
            stack.push(i);
        }else {
            if (stack.isEmpty() === false) {
                stack.pop();
                result= Math.max(result, i-stack.getTop());
            }else {
                stack.push(i);
            }
        }
    }
    return result;
}
console.log(lengthOfLongestSubstring('((()'));
