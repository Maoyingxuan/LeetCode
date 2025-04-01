var canPartition = function(nums) {
    
    let sum = (nums.reduce((a,b) => a+b))
    if(sum%2==1)
        return false
    // console.log(target)
    let target = sum/2
    let len = target+1
    let dp = new Array(len).fill(false)
    dp[0] = true
    for(let i = 0; i<nums.length;i++){
        for(let j = target; j >= 0;j--){
            if(j-nums[i]>=0&&dp[j-nums[i]]){
                dp[j] = true
            }
        }
        // console.log(dp);
        
    }
    return dp[target]
};
canPartition(nums =
    [1,2,5])