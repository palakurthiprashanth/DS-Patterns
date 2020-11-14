function printPascal(row) {
    if (row === 0) {
        return [1];
    }else {
        let line= [1];
        let previousLine= printPascal(row-1);
        for (var i=0;i<previousLine.length-1;i++) {
            line.push(previousLine[i]+previousLine[i+1]);
        }
        line.push(1);
        return line;
    };
}
console.log(printPascal(5));
