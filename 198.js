/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = new Array(nums.length+1).fill(0)
    dp[1] = nums[0]
    dp[2] = Math.max(nums[0],nums[1])
    for(let i = 2;i<nums.length;i++){
        dp[i+1] = Math.max(dp[i],dp[i-1]+nums[i])
    }
    // console.log(dp)
    return dp[nums.length]
};
rob([1,2,3,1])