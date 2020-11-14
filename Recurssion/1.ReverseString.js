function reverseAString(str) {
    if (str === "") {
        return "";
    }
    return str[str.length-1]+reverseAString(str.substr(0, str.length-1));
}
console.log(reverseAString("abc"));// cba
