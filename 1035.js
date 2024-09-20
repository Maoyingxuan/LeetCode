/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) {
    let l1 = nums1.length, l2 = nums2.length
    let dp  = new Array(l1+1).fill(0).map(()=>new Array(l2+1).fill(0))
    let max = 0
    // console.log(dp);
    for(let i = 1;  i <=l1; i++){
        for(let j = 1; j <= l2; j++){
            if(nums1[i-1] == nums2[j-1]){
                dp[i][j] = dp[i-1][j-1]+1
            }else dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1])
        }
    }
    // console.log(dp);
    return dp[l1][l2]
    
    
};
maxUncrossedLines(nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1])