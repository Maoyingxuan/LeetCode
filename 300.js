/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length+1).fill(1)
    // let Max = 1
    for(let i = 1; i< nums.length+1;i++){
        for(let j = 0; j < i; j++){
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[j]+1,dp[i])
            }
            // Max = Max < dp[i] ? dp[i] : Max
        }
    }
    // console.log(Max);
    return Math.max(...dp)
};
lengthOfLIS(nums = [10,9,2,5,3,7,101,18])