function happyNumber(num) {
    let slow= num;
    let fast= num;

    while(true) {
        slow= sumOfSquares(num);
        fast= sumOfSquares(sumOfSquares(num));

        if (slow===fast) {
            break;
        }
    }
    return slow===1;
}

function sumOfSquares(num) {
    let sum= 0;

    while(num >0) {
        let digit= num%10;
        sum+= digit*digit;
        num= Math.floor(num/10);
    }
    return sum;
}
