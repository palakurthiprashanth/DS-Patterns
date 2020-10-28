function evaluatePostfix(exp) {
    let stack= new Stack();
    let op1, op2;
    for (var i=0;i<exp.length;i++) {
        if (!isNaN(parseInt(exp[i],10))) {
            stack.push(parseInt(exp[i], 10));
        }else {
            op1= stack.pop();
            op2= stack.pop();
            if (exp[i]==='+') {
                stack.push(op1+op2)
            }
            if (exp[i]==='-') {
                stack.push(op2-op1);
            }
            if (exp[i]==='*') {
                stack.push(op1*op2);
            }
            if (exp[i]==='/') {
                stack.push(op2/op1);
            }
        }
    }
    return stack.pop();
}
console.log("Result: " + evaluatePostfix("921*-8-4+")); //3
