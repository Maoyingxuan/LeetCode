/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let a = text1.length, b = text2.length
    let dp = new Array(a+1).fill(null).map(()=>new Array(b+1).fill(0))
    // console.log(dp);
    for(let i = 1; i < a+1; i++){
        for(let j = 1; j < b+1; j++){
            if(text1[i-1] == text2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1              
            }else {
                dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j])
            }
        }
    }
    // console.log(dp[a][b]);
    return dp[a][b]
};
longestCommonSubsequence(text1 = "abcde", text2 = "ace" )