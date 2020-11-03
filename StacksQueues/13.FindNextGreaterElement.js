// https://www.youtube.com/watch?v=NXOOYYwpbg4&t=653s

function nextGreaterElement(arr) {
    let result= [];
    let stack= new Stack();

    for (var i=arr.length-1;i>=0;i--) {
        let next= arr[i];

        if (stack.isEmpty() === false) {
            let top= stack.getTop();
            // remove all lesser elements on right side.
            while(top<=next) {
                if (stack.isEmpty()) {
                    break;
                }
                stack.pop();
                top= stack.getTop();
            }
        }

        // if stack is empty , that means all elements on right side are less.
        if(stack.isEmpty()) {
            result[i]= -1;
        }else {
            result[i]= stack.getTop();
        }

        stack.push(next);
    }
    return result;
}
console.log(nextGreaterElement([4,6,3,2,8,1]));

/**
Time Complexity #
In the above algorithm, it is observed that every element is pushed on the stack exactly once. Furthermore, since once an element is removed 
from the stack, it is never re-inserted, every element is removed exactly once, too. That means we perform one push and one pop operation per element, 
exactly. Therefore, the time complexity of this algorithm will be O(n). This is a significant improvement over the brute force method’s runtime complexity 
of O(n2).
**/
