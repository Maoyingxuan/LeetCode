/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//01背包
var findMaxForm = function(strs, m, n) {
    let dp = new Array(m+1)
    for(let i=0;i<=m;i++){
        dp[i] = new Array(n+1).fill(0)
    }
    // console.log(dp)
    for(let i = 0; i<strs.length;i++){
        let nums1 = strs[i].split(1).length - 1
        let nums0 = strs[i].split(0).length - 1
        for(let j = m;j>=0;j--){
            for(let k=n; k>=0;k--){
                if(j>=nums0&&k>=nums1)
                    dp[j][k] = Math.max(dp[j][k],dp[j-nums0][k-nums1]+1)
            }
        }
        // console.log(dp)
        
    }
    // console.log(dp[m][n])
    return dp[m][n]
    // console.log(dp)
};
findMaxForm(strs = ["10","0001","111001","1","0"], m = 5, n = 3)