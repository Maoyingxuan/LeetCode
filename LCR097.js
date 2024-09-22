/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let dp = new Array(s.length+1).fill(null).map(()=>new Array(t.length+1).fill(0))
    // console.log(dp);
    for(let i = 0; i <= s.length; i++)
        dp[i][0] = 1
    // console.log(dp);
    for(let i = 1; i <= s.length; i++){
        for(let j = 1; j<=t.length; j++){
            if(s[i-1] === t[j-1]){
                dp[i][j] = dp[i-1][j-1] + dp[i-1][j]                
            }else {
                dp[i][j] =  dp[i-1][j] 
            }
        }
        // console.log(i+':'+ dp[i]);
    }
    // console.log(dp);
    return dp[s.length][t.length]
};
numDistinct(s = "rabbbit", t = "rabbit")