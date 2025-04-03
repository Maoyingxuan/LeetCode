/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findMin = (nums) => {
    let left = 0
    let right = nums.length - 1
    while(left < right){
        let mid = Math.floor(left+(right-left)/2)
        if(nums[mid] < nums[nums.length-1]){
            right = mid 
        }else{
            left = mid + 1
        }
    }
    return right
}
const find = (nums, start, end, target) => {
    nums = nums.slice(start,end)
    let l = 0, r= nums.length - 1
    while(l <= r){
        let mid = Math.floor(l + (r - l)/2)
        if(nums[mid] == target){
            return mid
        }else if(nums[mid] < target){
            l = mid + 1
        }else{
            r = mid - 1
        }
    }
    return -1
}
var search = function(nums, target) {
    let min = findMin(nums)
    // console.log(min);
    let nums_left = nums.slice(0,min)
    let nums_right = nums.slice(min,nums.length+1)
    // console.log(nums_left);
    // console.log(nums_right);
    if(target <= nums[nums.length-1]){
        let res = find(nums,min,nums.length,target)
         if(res==-1){
            return -1
         }
         return res+min
    }else{
        return find(nums,0,min,target)
    }
};
console.log(search([3,1],0))