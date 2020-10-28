function isBalanced(exp) {
    let stack= new Stack();

    for (var i=0; i<exp.length;i++) {
        if (exp[i]==='}' || exp[i]===']' || exp[i]===')') {
            if (stack.isEmpty()) {
                return false;
            }

            let output= stack.pop();
            if ((exp[i]==='}' && output!=='{') || (exp[i]===')' && output!=='(') || (exp[i]===']' && output!=='[')) {
                return false;
            }
        }else {
            stack.push(exp[i]);
        }
    }

    // after processing if exp still in stack then invalid.
    if (stack.isEmpty() === false) {
        return false;
    }
    return true;
}
