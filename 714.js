/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices,fee) {
    let dp = new Array(prices.length+1).fill(null).map(()=>new Array(3).fill(0))
    //dp[i][0]表示第i天不持有股票时最大收益
    //dp[i][1]表示第i天持有股票时最大收益
    //dp[i][2]表示卖出这个状态
    dp[1][0] = 0
    dp[1][1] = 0 - prices[1-1]
    dp[1][2] =  - fee
    for(let i = 2; i <= prices.length; i++){
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][2])
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i-1],dp[i-1][2]-prices[i-1])
        dp[i][2] = dp[i-1][1] + prices[i-1] -fee
    }
    return Math.max((dp[prices.length][0]),(dp[prices.length][2]));
    
};
console.log(maxProfit(prices = [1, 3, 2, 8, 4, 9], fee = 2))