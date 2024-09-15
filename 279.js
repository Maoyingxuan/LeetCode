/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    function find_max(n){
        let i = 0
        while(n>i*i){
            i++            
        }
        return i
    }
    let max = find_max(n)
    let dp = new Array(n+1).fill(Number.MAX_VALUE)
    dp[0] = 0
    for(let i = 0;i<=max; i++){
        for(let j = 0;j<=n; j++){
            if(j>=i*i){
                dp[j] = Math.min(dp[j],dp[j-i*i]+1)
            }
        }
    }
    return dp[n]

};
console.log(numSquares(9))