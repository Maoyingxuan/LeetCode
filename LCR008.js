/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left=0,right = 0
    let sum = nums[right]
    let res = 0
    while(1){
        if(sum<target){
            right++
            if(right>=nums.length) break
            sum += nums[right]
        }else{
            res = (res==0)?(right-left+1):Math.min(res,right-left+1)
            sum -= nums[left]
            left++
        }
    }
    return res
};
minSubArrayLen(target = 7, nums = [2,3,1,2,4,3])