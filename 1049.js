// 0-1 背包  动态规划
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    let sum = (stones.reduce((a,b)=>a+b))
    let target = sum>>1
    // target = Math.floor(target)
    // console.log(target)
    let dp = new Array(target+1).fill(0)
    for(let i = 0;i<stones.length;i++){
        for(let j = target; j>=stones[i];j--){
            // if(j-[stones[i]]>=0)
            dp[j] = Math.max(dp[j],dp[j-[stones[i]]]+stones[i])
            // console.log(dp[j])
        }
    }
    // while(dp[target]!==target){
    //     target--
    // }
    return sum - 2 * dp[target]
};
console.log(lastStoneWeightII([2,7,4,1,8,1]))