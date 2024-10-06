/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = new Map()
    for(let num of nums){
        res.set(num,(res.get(num)||0)+1)
        if(res.get(num) >= nums.length/2)
            return num
    }
};
majorityElement(nums = [2,2,1,1,1,2,2])