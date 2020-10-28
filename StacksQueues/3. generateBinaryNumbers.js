// result = ["1","10","11"]

function generateBinary(num) {
    let queue= new Queue();
    let result= [];
    queue.enqueue("1");

    for (var i=0; i<num; i++) {
        let val= queue.dequeue();
        result.push(val);
        queue.enqueue(val+"0");
        queue.enqueue(val+"1");
    }
    return result;
}

console.log(generateBinary(5));
