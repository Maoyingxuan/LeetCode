/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let dp = new Array(nums.length+1).fill(1)
    for(let i = 1; i<=nums.length; i++){
        if(nums[i]>nums[i-1]){
            dp[i] = dp[i-1] + 1
        }
    }
    // console.log(dp);
    return Math.max(...dp)
};
findLengthOfLCIS(nums = [1,3,5,4,7])