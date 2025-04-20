/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let res = []
    const counts = _.countBy(s)
    const ansSet = new Set()
    for(const c of s){
        counts[c]--
        if(ansSet.has(c)){
            continue
        }
        while(res && c < res[res.length-1] && counts[res[res.length-1]]){
            ansSet.delete(res.pop())
        }
        res.push(c)
        ansSet.add(c)
    }
    return res.join('')
};
console.log(removeDuplicateLetters(s = "cbacdcbc"))