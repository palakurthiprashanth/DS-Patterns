// convert arithmatic to postfix
// postfix to calculations.


function convertArithmaticToPostfix(exp) {
    let postFixArray= [];
    let stack= new Stack();
    let n= exp.length;
    let count= 0;

    while(count<n) {
        let ch= exp[count];

        if (isOperator(ch)) {
            // ch should always be higher precedence to push into stack.
            while(stack.isEmpty() === false && preced(stack.getTop(), ch)) {
                postFixArray.push(stack.pop());
            }
            stack.push(ch);
            count++;
        }else {
            postFixArray.push(ch);
            count++;
        }
    }
    while(stack.isEmpty() === false) {
        postFixArray.push(stack.pop());
    }
    return postFixArray.join('');
}

function isOperator(ch) {
    if (ch==='+' || ch==='-' || ch==='*' || ch==='/') {
        return true;
    }
    return false;
}

// checks if op1 has high precedence.
function preced(op1, op2) {
    if (op1 === '+' || op1==='-') {
        if (op2 ==='+' || op2==='-') {
            return true;
        }
    }

    if (op1==='*' || op1==='/') {
        return true;
    }

    return false;
}
console.log(convertArithmaticToPostfix('3+6*5-1/2'));
