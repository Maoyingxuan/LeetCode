/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let dp = new Array(nums.length).fill(Infinity)
    dp[0] = 0
    for(let i = 0; i < nums.length; i++){
        for(let step = 0; step <= nums[i]; step++){
            if(step!==0 && (i+step)<nums.length){
                dp[i+step] = Math.min(dp[i+step],dp[i]+1)
            }
        }
    }
    // console.log(dp);
    return dp[nums.length-1]
};
jump(nums = [2,3,0,1,4])