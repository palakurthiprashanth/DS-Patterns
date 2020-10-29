// https://www.geeksforgeeks.org/queue-based-approach-for-first-non-repeating-character-in-a-stream/

function firstNonRepeating(str) {
    let charCount= {};
    let result= [];

    let queue= new Queue();
    for (var i=0;i<str.length;i++) {
        let ch= str[i];

        queue.enqueue(ch);

        if (charCount[ch]) {
            charCount[ch]++
        }else {
            charCount[ch]=1;
        }

        while (queue.isEmpty() === false) {
            if (charCount[queue.getTop()] > 1) {
                queue.dequeue();
            }else {
                result.push(queue.getTop());
                break;
            }
        }

        if (queue.isEmpty()) {
            result.push(-1);
        }
    }
    return result.join(" ");
}

console.log(firstNonRepeating("aabc"));
