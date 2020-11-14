function removeTabsAndSpaces(str) {
    if (str.length === 0) {
        return "";
    }
    if (str[0] === '\t' || str[0] === ' ') {
        return removeTabsAndSpaces(str.substr(1));
    }
    return str[0]+removeTabsAndSpaces(str.substr(1));
};
var myString = "Hello\tWorld";
console.log(removeTabsAndSpaces(myString));
