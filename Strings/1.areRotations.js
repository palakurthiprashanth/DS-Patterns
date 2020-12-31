// https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/

function areRotations(str1, str2) {
    return (str1.length === str2.length) && (str1+str2).indexOf(str2) !== -1;    
}
