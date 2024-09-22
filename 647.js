/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let l = s.length
    let dp = new Array(l).fill(null).map(()=>new Array(l).fill(false))
    let result = 0
    for(let i = l-1; i >= 0; i--){
        for(let j = 0; j < l; j++){
            if(j<i) continue
            if(s[i] == s[j]){
                if((j-i) <= 1){
                    dp[i][j] = true  
                    result++
                } else if((j-i)>1){
                    dp[i][j] = dp[i+1][j-1]
                   if(dp[i][j]) result++
                }
            }
        }
    }
    return result
};
console.log(countSubstrings(s = "abc"));
