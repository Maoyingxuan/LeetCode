//分割等和子集   0-1背包  动态规划
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    
    let sum = (nums.reduce((a,b) => a+b))
    if(sum%2==1)
        return false
    // console.log(target)
    let target = sum/2
    let len = target+1
    let dp = new Array(len).fill(0)
    for(let i = 0; i<nums.length;i++){
        for(let j = target;j>=0;j--){
            if(j-nums[i] >=0)
            dp[j] = Math.max(dp[j],dp[j-nums[i]]+nums[i])
            // console.log(dp[j])
        }
    }
    return dp[target]=== target
};
console.log(canPartition([1,5,11,5]))