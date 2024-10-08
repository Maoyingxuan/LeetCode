/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const l = nums.length
    let max = 0
    for(let i = 0; i<l; i++){
        if(i>max) return false
        max = Math.max(max, i+nums[i])
    }
    return true
};
console.log(canJump([3,2,1,0,4]))