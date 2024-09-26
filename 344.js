/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let start = 0
    let end = s.length-1
    while(start<end){
        let k = s[end]
        s[end] = s[start]
        s[start] = k
        start++
        end--
    }
    // console.log(s);
    return s
};
reverseString(s = ["h","e","l","l","o"])