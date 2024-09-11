/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    let used ={}
    let length = nums.length
    const dfs = (n,m) => {
        if(n.length == length){
            res.push(n.slice())
            // console.log(res)
            return
        }
        for(let i = 0;i<m.length;i++){
            if(used[i]) continue
            n.push(m[i])
            used[i] = true
            dfs(n,m)
            n.pop()
            used[i] = false
        }
    }
    dfs([],nums)
    return res
};
console.log(permute([0,1]))