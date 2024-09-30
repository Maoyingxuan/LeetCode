/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    function swap(i,j){
        let mid = nums[i]
        nums[i] = nums[j]
        nums[j] = mid
    }
    let len = nums.length
    if(len === 1 || len === 0) return nums
    let start = 0
    let end = 1
    while(end<=len-1){
        if(nums[start] === 0){
            if(nums[end]===0){
                end++
            }
            else{
                swap(start,end)
                start++
                end++
            }
        }else{
            start++
            end++
        }
    // console.log(nums); 
};
return nums
}
moveZeroes(nums = [0,1,0,3,12])