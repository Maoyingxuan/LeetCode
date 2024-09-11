/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a,b)=>a-b)
    // console.log(nums)
    const result = []
    if(nums == null || nums.length < 3){
        return []
    }  
    for(let i = 0;i<nums.length - 2;i++){
        if(nums[i]>0) break
        if(i>0 && nums[i]===nums[i-1]) continue
        let m = i+1
        let n = nums.length-1
        while(m<n){
            let sum = nums[i]+ nums[m] +nums[n]
            if(sum === 0){
                result.push([nums[i],nums[m],nums[n]])
                while(m,n && nums[m]==nums[m+1]) m++
                while(m,n && nums[n]==nums[n-1]) n--
                m++
                n--
            }
            else if(sum < 0) {
                while(m,n && nums[m]==nums[m+1]) m++
                m++
            }
            else{
                while(m,n && nums[n]==nums[n-1]) n--
                n--
            }
        }
    }
    return result
};
console.log(threeSum([-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]))