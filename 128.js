/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums = nums.sort((a,b)=>a-b)
    console.log(nums);
    let max = 1
    let len = 1
    let start = nums[0]
    for(let i = 1; i < nums.length; i++){
        if(nums[i] == start + 1){
            len++
            max = Math.max(len,max)
        }else{
            len = 1
        }
        start = nums[i]
    }
    return max
};
longestConsecutive(nums = [0,3,7,2,5,8,4,6,0,1])