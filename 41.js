var firstMissingPositive = function(nums) {
    nums = nums.sort((a,b)=>a-b)
    console.log(nums);
    
    let res = 1
    let pos = -1
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            pos = i
            break
        }
    }
    if(pos!==-1){
        for(let i = pos; i<nums.length; i++){
            if(res===nums[i]){
                res++
            }else break
        }
    }
    return res
};
firstMissingPositive([100000, 3, 4000, 2, 15, 1, 99999])