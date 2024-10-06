/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let dp = new Array(s.length).fill(null).map(()=>new Array(s.length).fill(false))
    for(let i = s.length-1; i >= 0 ; i--){
        for(let j = i; j < s.length; j++){
            if(i === j) {
                dp[i][j] = true
            }else if(s[i]===s[j] && j-i==1){
                dp[i][j] = true
            }else if(s[i]===s[j] && dp[i+1][j-1] === true){
                dp[i][j] = true
            }
        }
    }
    console.log(dp);
    const res = []
    const dfs = (temp,start) =>{
        if(start == s.length){
            res.push(temp.slice())
            return
        }
        for(let i = start; i<s.length;i++){
            if(dp[start][i] === true){
                temp.push(s.substring(start,i+1))
                dfs(temp,i+1)
                temp.pop()
            }
        }
    }
    dfs([],0)
    // console.log(res);
    return res
};
partition(s = "efe")