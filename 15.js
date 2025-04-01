/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b)=>a-b)
    let res = []
    for(let i = 0; i < nums.length - 2;i++){
        if(i > 0 && nums[i] == nums[i-1]) continue
        let j = i + 1
        let k = nums.length - 1
        while(j < k){
            let ans = nums[i] + nums[j] + nums[k]
            if(ans === 0) {
                res.push([nums[i],nums[j],nums[k]])
                j++
                while(nums[j] === nums[j-1]) j++
                k--
                while(nums[k] === nums[k+1]) k--
            }else if(ans < 0){
                j++
                while(nums[j] === nums[j-1]) j++
            }else{
                k--
                while(nums[k] === nums[k+1]) k--
            }
        }
    }
    // console.log(res)
    return res
};
threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0])