// https://www.youtube.com/watch?v=1YUqtoT9YoE

function countAndSay(n) {
    if (n===1) return "1";
    if (n===2) return "11";
    let s= "11";

    for (var i=3;i<=n;i++) {
        let t= "";
        s= s+"&"; // adding delimiter.
        let count= 1;
        for (var j=1; j<s.length;j++) {
            if (s[j]!==s[j-1]) {
                t=t+count;
                t= t+s[j-1];
            }else {
                count++;
            }
        }
        s= t;
    }
    return s;
}
console.log(countAndSay(4));// 1211
