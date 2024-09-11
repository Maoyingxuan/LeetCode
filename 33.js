/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let len = nums.length - 1
    if(nums.length == 0) return -1
    if(nums.length == 1) {
        if(nums[0] == target) return 0
        else return -1
    }
    let l = 0
    let r = len
    while(r-l>0){
        if(r-l == 1){
            if(nums[l] === target) return l
            else if(nums[r] === target) return r
            else return -1
        }
        
        let mid = l + Math.floor((r-l)/2)
        if(nums[mid] === target) return mid
        else if(nums[l] <= nums[mid] ){
            if(nums[l]<=target&&target<=nums[mid]){
                r = mid
            }
            else l = mid
        }
        else if( nums[mid] <= nums[r]){
            if(nums[mid]<=target&&target<=nums[r]){
                l = mid
            }
            else r = mid
        }
    }
};
console.log(search([5,1,3],3))