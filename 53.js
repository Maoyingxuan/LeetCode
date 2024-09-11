/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let length = nums.length
    if(length == 1) return nums[0]
    let max = nums[0]
    let latest = nums[0]
    for(let i = 1; i < length ;i++){
        latest = latest + nums[i] > nums[i] ? (latest + nums[i]) : nums[i]
        // console.log(latest)
        if(latest > max) max = latest
    }
    return max
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))