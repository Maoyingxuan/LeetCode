/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = Array(amount+1).fill(-1)
    dp[0] = 0
    for(let coin of coins){
        for(let i = 0; i <= amount; i++){
            if(i==coin){
                dp[i] = 1
            }else if(i>coin){
                if(dp[i]==-1 && dp[i-coin]!==-1)
                    dp[i] = dp[i-coin]+1
                else if(dp[i]!==-1 && dp[i-coin]!==-1)
                dp[i]=Math.min(dp[i-coin]+1,dp[i])
            }
        }
    }
    // console.log(dp)
    return dp[amount]
};
console.log(coinChange(coins = [1, 2, 5], amount = 11))