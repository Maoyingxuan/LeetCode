/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left<=right){
        let middle = Math.floor((left+right)/2)
        if(nums[middle] == target) {
            return middle
        }else if(nums[middle] < target){
            left = middle+1
        }else right = middle-1
    }
    return Math.ceil((left+right)/2)
};
console.log(searchInsert(nums = [1,3,5,6], target = 7))