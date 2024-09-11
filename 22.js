/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    const dfs = (l,r,str) => {
        if(str.length == 2*n){
            res.push(str)
            return
        }
        if(l > 0){ //左括号存在
            dfs(l-1,r,str+'(')
        }
        if(l<r){ //右括号可以加
            dfs(l,r-1,str+')')
        }
    }
    dfs(n,n,'')
    return res
};
console.log(generateParenthesis(3))