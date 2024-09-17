/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length == 1) return 0
    let dp = new Array(prices.length+1).fill(null).map(()=>new Array(4).fill(0))
    //dp[i][0]表示第i天不持有股票时最大收益
    //dp[i][1]表示第i天是持有股票最大收益
     //dp[i][2]表示第i天卖出股票时最大收益
     //dp[i][3]冷冻期
    dp[1][0] = 0
    dp[1][1] = 0 - prices[1-1]
    dp[1][2] = 0
    dp[1][3] = 0
    for(let i = 2; i <= prices.length; i++){
        dp[i][0] = Math.max(dp[i-1][0],dp[i-1][3])
        dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0]-prices[i-1],dp[i-1][3]-prices[i-1])
        dp[i][2] = dp[i-1][1] + prices[i-1]
        dp[i][3] = dp[i-1][2] 
    }
    return (Math.max(dp[prices.length][0],dp[prices.length][2],dp[prices.length][3]));
    
};
console.log(maxProfit([1,2,3,0,2]))