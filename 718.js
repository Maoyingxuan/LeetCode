/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    let a = nums1.length, b = nums2.length
    let dp = new Array(a+1).fill(null).map(()=>new Array(b+1).fill(0))
    let max = 0
    // console.log(dp);
    for(let i = 1; i < a+1; i++){
        for(let j = 1; j < b+1; j++){
            if(nums1[i-1] == nums2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1      
                max = max > dp[i][j]? max : dp[i][j]          
            }
        }
    }
    // console.log(dp);
    return max
};
console.log(findLength(nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,1]))