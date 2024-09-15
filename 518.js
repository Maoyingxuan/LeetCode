/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let dp = new Array(amount+1).fill(0)
    dp[0] = 1
    for(let j in coins){
    for(let i = 0; i<=amount;i++){
            // console.log(j)
                if(i>=coins[j])
                dp[i] += dp[i-coins[j]]
            }
        }
        return dp[amount]
    }
change(5,[1,2,5])