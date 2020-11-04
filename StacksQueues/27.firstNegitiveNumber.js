// https://abhijitpatra.wordpress.com/2019/01/20/first-negative-integer-in-every-window-of-size-k/

function firstkNegitive(arr, k) {
    let dequeue= new Dequeue();
    let result= [];
    for (var i=0;i<arr.length;i++) {

        // if it exceeded the window , remove first -ve element as it is not required to consider.

        if (dequeue.isEmpty() ==false && dequeue.getFront() === arr[i-k]) {
            dequeue.deleteAtFront();
        }

        //dequee will have only useful elements, in this case it is -ve numbers.
        if (arr[i]<0) {
            dequeue.insertAtBack(arr[i]);
        }

        // if window is filled , that means it has k elements
        if (i >=k-1) {
            if (dequeue.getFront() !==undefined) {
                result.push(dequeue.getFront());
            }else {// if dequee is empty then no -ve numbers.
                result.push(0);
            }
        }
    }
    return result;
}

console.log(firstkNegitive([-12, -1, -7, 8, -15, 30, 16, 28], 3));
