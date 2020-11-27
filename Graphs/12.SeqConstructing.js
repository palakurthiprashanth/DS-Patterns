/**
Reconstructing a Sequence (hard) #
Given a sequence originalSeq and an array of sequences, write a method to find if originalSeq can be uniquely reconstructed from the array of sequences.

Unique reconstruction means that we need to find if originalSeq is the only sequence such that all sequences in the array are subsequences of it.

Example 1:

Input: originalSeq: [1, 2, 3, 4], seqs: [[1, 2], [2, 3], [3, 4]]
Output: true
Explanation: The sequences [1, 2], [2, 3], and [3, 4] can uniquely reconstruct   
[1, 2, 3, 4], in other words, all the given sequences uniquely define the order of numbers 
in the 'originalSeq'.
**/

function can_construct(orginalseq, sequences) {
    let sortedOrder= [];
    let inDegree= {};
    let graph= {};

    sequences.forEach((sequence)=> {
        for (let i = 0; i < sequence.length; i++) {
            inDegree[sequence[i]]= 0;
            graph[sequence[i]]= [];
        }
    });

    sequences.forEach((sequence)=>{
        for (var i=1; i<sequence.length;i++) {
            let parent= sequence[i-1];
            let child= sequence[i];
            inDegree[child]+=1;
            graph[parent].push(child);
        }
    });

    let vertices= Object.keys(inDegree);

    if (vertices.length !== orginalseq.length) {
        return false;
    }

    let sources= new Queue();

    vertices.forEach((vertex)=>{
        if (inDegree[vertex] === 0) {
            sources.enqueue(vertex);
        }
    });

    while(sources.isEmpty() === false) {
        
        // if there are multiple orders.
        if (sources.length >1) {
            return false;
        }

        let vertex= sources.dequeue();
        sortedOrder.push(vertex);
        graph[vertex].forEach((child)=>{
            inDegree[child] -= 1;
            if (inDegree[child] === 0) {
                sources.enqueue(child);
            }
        });
    }
    return sortedOrder.length === orginalseq.length;
}
console.log(`Can construct: ${
  can_construct([1, 2, 3, 4], [
    [1, 2],
    [2, 3],
    [3, 4],
  ])}`); // true.
