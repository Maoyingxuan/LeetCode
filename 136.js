/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let stack = []
    nums = nums.sort((a,b)=>a-b)
    for(let i = 0; i < nums.length; i++){
        if(stack.length && nums[stack[stack.length-1]]===nums[i]){
            stack.pop()
        }else stack.push(i)
    }
    return nums[stack[0]]
};