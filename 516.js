/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let l = s.length
    let dp = new Array(l).fill(null).map(()=>new Array(l).fill(0))
    let result = 1
    for(let i = l-1; i >= 0; i--) dp[i][i] = 1
    for(let i = l-1; i >= 0; i--){
        for(let j = i+1; j < l; j++){
            if(s[i] == s[j]){
                    dp[i][j] = dp[i+1][j-1] + 2
                    result = result>dp[i][j]?result:dp[i][j]
            }else 
            {   
                    dp[i][j] = Math.max(dp[i+1][j],dp[i][j-1]) 
                    result = result>dp[i][j]?result:dp[i][j]
            }
        }
    }
    return result
};
console.log(longestPalindromeSubseq('bbbab'));
