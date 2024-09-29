/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = nums[0]
    let prevMin = nums[0]
    let prevMax = nums[0]
    for(let i = 1; i < nums.length; i++){
        let a = prevMax*nums[i]
        let b = prevMin*nums[i]
        prevMin = Math.min(a,b,nums[i])
        prevMax = Math.max(a,b,nums[i])
        res = Math.max(prevMax,res)
    }
    // console.log(res);
    return res
};
maxProduct(nums = [2,3,-2,4])