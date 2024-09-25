/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s===t || s.length!==t.length) return false
    let hash = new Array(26).fill(0)
    for(let char of s){
        // console.log(char.charCodeAt()-'a'.charCodeAt);
        hash[char.charCodeAt()-'a'.charCodeAt()] += 1
    }
    for(let char of t){
        hash[char.charCodeAt()-'a'.charCodeAt()] -= 1
    }
    for(let i=0; i<=25; i++){
        if(hash[i]!==0) return false
    }
    return true
};
// console.log('a'.charCodeAt());
console.log(isAnagram(s = "rat", t = "car"))
