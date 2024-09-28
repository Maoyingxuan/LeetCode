/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    nums = nums.concat(nums)
    let len = nums.length
    let stack = []
    let res = new Array(len/2).fill(-1)
    for(let i = 0; i<len; i++){
        while(stack.length && nums[i]>nums[stack[stack.length-1]]){
            let j = stack.pop()
            if(j<res.length) res[j] = nums[i]
        }
        stack.push(i)
    }   
    console.log(res);
};
nextGreaterElements(nums = [1,2,3,4,3])