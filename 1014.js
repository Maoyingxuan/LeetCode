/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let l = values.length
    let dp = new Array(l).fill(0)
    for(let i = 1; i<l; i++){
        dp[i] = Math.max((dp[i-1]+values[i]-values[i-1]-1),(values[i]+values[i-1]-1))
    }
    return Math.max(...dp)
    // console.log(dp)
};
maxScoreSightseeingPair(alues = [8,1,5,2,6])