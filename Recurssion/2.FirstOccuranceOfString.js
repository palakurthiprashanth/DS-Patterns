function firstIndex(arr, testVar, currentIndex) {
    if (currentIndex === arr.length) {
        return -1;
    }

    if (arr[currentIndex] === testVar) {
        return currentIndex;
    }

    return firstIndex(arr, testVar, currentIndex+1);
}

var arr1 = [9, 8, 1, 8, 1, 7];
var testVariable = 1;
var currentIndex = 0;
console.log(firstIndex(arr1, testVariable, currentIndex)); //2
