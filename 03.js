/**
 * @param {string} s
 * @return {number}
 */
// Set 比 Map 节省时间
    var lengthOfLongestSubstring = function(s) {
        let i = 0, j = 0
        let max = 0
        let set = new Set()
        while(j < s.length){
            if(!set.has(s[j])){
                set.add(s[j])
                j++
                max = Math.max(max,set.size)
            }else{
                set.delete(s[i])
                i++
            }
        }
        return max
    };
let result = lengthOfLongestSubstring('pwwkew')
console.log(result)