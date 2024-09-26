/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let next = new Array(s.length).fill(0)
    let j = 0
	for(let i = 1; i<s.length; i++){	//i指针指向的是后缀末尾，j指针指向的是前缀末尾
        while(j>0 && s[i]!==s[j])
            j = next[j-1]
        if(s[i] === s[j])
        {
            j++
        }
        next[i] = j
	}
    console.log(next)
    let n = s.length - next[s.length-1]
    if (s.length % n === 0 && n!==s.length) return true
    return false
}
console.log(repeatedSubstringPattern("abac"))