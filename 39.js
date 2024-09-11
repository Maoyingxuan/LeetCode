/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = []
    let temp = []
    const dfs = (start,sum) =>{
        if(sum>target) return
        else if(sum==target && temp.length!=0){
                res.push(temp.slice())
        }
        else{
            for (let i = start; i < candidates.length; i++) { // 枚举当前可选的数，从start开始
                temp.push(candidates[i]);      
                dfs(i,sum + candidates[i]); 
                temp.pop();   
              }
        }
    }
    dfs(0,0)
    return res
};
(combinationSum([2,3,5],8))