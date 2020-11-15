function printSubset(input, output) {
    if (input === "") {
        console.log(output);
        return;
    }

    let op1 = output;
    let op2= output+input[0];
    input= input.substring(1);

    printSubset(input, op1);
    printSubset(input, op2);
}

console.log(printSubset("abc", ''));
