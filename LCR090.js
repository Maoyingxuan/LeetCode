/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length==1) return nums[0]
    let dp1 = new Array(nums.length).fill(0)
    dp1[1] = nums[0]
    dp1[2] = Math.max(nums[0],nums[1])
    for(let i = 2;i<nums.length-1;i++){
        dp1[i+1] = Math.max(dp1[i],dp1[i-1]+nums[i])
    }
    // console.log(dp1[nums.length-1])
    let dp2 = new Array(nums.length).fill(0)
    dp2[1] = nums[1]
    dp2[2] = Math.max(nums[1],nums[2])
    for(let i = 3;i<nums.length;i++){
        dp2[i] = Math.max(dp2[i-1],dp2[i-2]+nums[i])
    }
        // console.log(dp2[nums.length-1])
    return Math.max(dp1[nums.length-1],dp2[nums.length-1])
};
rob([1,2,3,1])