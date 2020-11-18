// https://www.youtube.com/watch?v=2JSQIhPcHQg

function findPages(books, students) {
    let sum= 0;
    let result= Number.POSITIVE_INFINITY;

    for (var i=0;i<books.length;i++) {
        sum= sum+books[i];
    }

    let start= 0;
    let end= sum;

    while (start <=end) {
        let midIndex= Math.floor(start+ (end-start)/2);

        if (isPossible(books, students, midIndex)) {
            result= Math.min(result, midIndex);
            end= midIndex-1;
        }else {
            start= midIndex+1;
        }
    }
    return result;
}

function isPossible(books, studentsReq, minimum) {
    let students= 1;
    let currentSum= 0;

    for (var i=0;i<books.length;i++) {
        if (books[i] > minimum) {
            return false;
        }
        if (currentSum+books[i] > minimum) {
            students++;
            currentSum= books[i];

            if (students > studentsReq) {
                return false;
            }
        }else {
            currentSum= currentSum+books[i];
        }
    }
    return true;
}
console.log(findPages([12, 34, 67, 90], 2)); // 113.
