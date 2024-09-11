/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const search_left = (nums,target) =>{
        let l = 0
        let r = nums.length - 1
        while(l<=r){
            let mid = Math.floor(l+(r-l)/2)
            if(nums[mid]<target){
                l = mid + 1
            }else{
                r = mid
            }
            if(r-l<=1){
                if(nums[l]==target) return l
                else if(nums[r]==target) return r
                else return -1
            }
        }
    }
    const search_right = (nums,target) =>{
        let l = 0
        let r = nums.length - 1
        while(l<=r){
            let mid = Math.floor(l+(r-l)/2)
            if(nums[mid]>target){
                r = mid - 1
            }else{
                l = mid
            }
            if(r-l<=1){
                if(nums[r]==target) return r
                else if(nums[l]==target) return l
                else return -1
            }
        }
    }
    if(nums.length == 0) {
        return ([-1,-1])
    }
    let left = (search_left(nums,target))
    let right = (search_right(nums,target))
    return [left,right]
};
console.log(searchRange([],0))