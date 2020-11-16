// https://www.geeksforgeeks.org/middle-of-three-using-minimum-comparisons/

function middleOfThree(a, b, c) {
    let x= a-b;
    let y= b-c;
    let z= a-c;

    if (x*y >0) {
        return b;
    }else if (x*z >0) {
        return c;
    }else {
        return a;
    }
}
console.log(middleOfThree(20, 30, 40));
