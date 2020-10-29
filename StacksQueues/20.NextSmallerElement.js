function nextSmallerElement(arr) {
    let stack= new Stack();
    let result=[];
    for (var i= arr.length-1;i>=0;i--) {
        let next= arr[i];
        if (stack.isEmpty()===false) {
            let top= stack.getTop();
            while (top>=next) {
                if (stack.isEmpty()) {
                    break;
                }
                stack.pop();
                top= stack.getTop();
            }
        }

        if (stack.isEmpty()) {
            result[i]= -1;
        }else {
            result[i]= stack.getTop();
        }
        stack.push(next);
    }
    return result;
}

console.log(nextSmallerElement([4,6,3,2,8,1])); // [3, 3, 2, 1, 1, -1]
