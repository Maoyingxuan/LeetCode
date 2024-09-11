/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let res = []
    if(s.length = 0) return true
    res.push(s[0])
    for(let i = 1; i < s.length; i++)
    {
        if(((s[i]==')'&&res[res.length-1]=='(')) || 
        ((s[i]==']'&&res[res.length-1]=='[')) || 
        ((s[i]=='}'&&res[res.length-1]=='{'))) 
            res.pop()
        else if(s[i]=='('||s[i]=='['||s[i]=='{')
            res.push(s[i])
        else return false
    }
    if(res.length === 0) return true
    else return false
};
console.log(isValid('(){}}{'))