function permutationWithSpaces(str) {
    return permutationWithSpacesHelper(str.substr(1), str[0]);
}

function permutationWithSpacesHelper(input, output) {
    if (input.length === 0) {
        console.log(output);
        return;
    }
    let op1= output+""+input[0];
    let op2= output+" "+input[0];

    input= input.substr(1);

    permutationWithSpacesHelper(input, op1);
    permutationWithSpacesHelper(input, op2);
}

console.log(permutationWithSpaces("ABC"));
