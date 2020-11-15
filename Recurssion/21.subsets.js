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


function printSubsetArrays(input, output) {
    if (input.length === 0) {
        console.log(output);
        return;
    }

    let op1= output;
    let op2= output+input[0];
    input= input.slice(1);

    printSubsetArrays(input, op1);
    printSubsetArrays(input, op2);
}

console.log(printSubsetArrays([1,2,3], []));
