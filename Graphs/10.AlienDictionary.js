/**
There is a dictionary containing words from an alien language for which we don’t know the ordering of the alphabets. Write a method to find the correct order 
of the alphabets in the alien language. It is given that the input is a valid dictionary and there exists an ordering among its alphabets.

Example 1:

Input: Words: ["ba", "bc", "ac", "cab"]
Output: bac
Explanation: Given that the words are sorted lexicographically by the rules of the alien language, so
from the given words we can conclude the following ordering among its characters:

1. From "ba" and "bc", we can conclude that 'a' comes before 'c'.
2. From "bc" and "ac", we can conclude that 'b' comes before 'a'

From the above two points, we can conclude that the correct character order is: "bac"
**/

function find_order(words) {

    // Used to Create graph.
    let indegree= {};
    let graph= {};

    // initializing indegree and graph.
    words.forEach((word)=>{
        for (var i=0;i<word.length;i++) {
            indegree[word[i]]= 0;
            graph[word[i]]= [];
        }
    });

    // Building graph.
    for (var i=0;i<words.length-1;i++) {
        let w1= words[i];
        let w2= words[i+1];
        for (var j=0;j<Math.min(w1.length,w2.length);j++) {
            let parent= w1[j];
            let child= w2[j];

            if (parent!== child) {
                graph[parent].push(child);
                indegree[child]+=1;
                break;
            }
        }
    }

    //graph is created , do a topological sort of graph to get a req word.
    let sortedOrder= [];
    let sources= new Queue();

    Object.keys(indegree).forEach((key)=>{
        if (indegree[key]===0) {
            sources.enqueue(key);
        }
    });

    while(sources.isEmpty() === false) {
        let vertex= sources.dequeue();
        sortedOrder.push(vertex);
        graph[vertex].forEach((child)=>{
            indegree[child]-=1;
            if (indegree[child] === 0) {
                sources.enqueue(child);
            }
        })
    }

    if (sortedOrder.length !== Object.keys(indegree).length) {
        return "";
    }
    return sortedOrder.join('');
}
console.log(`Character order: ${find_order(['ba', 'bc', 'ac', 'cab'])}`);// bac
