

// check for redundant brackets.
// https://www.youtube.com/watch?v=aMPXhEdpXFA

function checkRedundancy(exp) {
    let stack= new Stack();

    for (var i=0;i<exp.length;i++) {
        if (exp[i] === ')') {
            if (stack.getTop() === '(') {
                return true; // duplicate brackets
            }else {
                while(stack.getTop() !== '(') {
                    stack.pop();
                }
                stack.pop();
            }
        }else {
            stack.push(exp[i]);
        }
    }
    return false;
}
console.log(checkRedundancy("((a+b))"));
