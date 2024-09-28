/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    nums = nums.sort((a,b)=>a-b)
    // console.log(nums);
    let dp = new Array(nums.length).fill(1)
    for(let i = 1; i < nums.length; i++){
        if(nums[i]-nums[i-1]===1){
            dp[i] = dp[i-1] + 1
        }else if(nums[i]===nums[i-1]){
            dp[i] = dp[i-1]
        }
    }
    // console.log(dp);
    return Math.max(...dp)
};
longestConsecutive(nums = [0,3,7,2,5,8,4,6,0,1])