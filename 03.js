/**
 * @param {string} s
 * @return {number}
 */
// Set 比 Map 节省时间
var lengthOfLongestSubstring = function(s) {
    let max_length = 0;
    let length = 0;
    let start = 0;
    let end = 0;
    let windows = new Set()
    while(  end < s.length  ){
        if(!windows.has(s[end])){
        windows.add(s[end])  
        end++
        length++  
        }
        else{
        windows.delete(s[start]) 
        start++
        length--
        }
        if(max_length < length)
        max_length = length
    }
    return max_length
};
let result = lengthOfLongestSubstring('pwwkew')
console.log(result)