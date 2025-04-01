/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     let stack = []
//     nums = nums.sort((a,b)=>a-b)
//     for(let i = 0; i < nums.length; i++){
//         if(stack.length && nums[stack[stack.length-1]]===nums[i]){
//             stack.pop()
//         }else stack.push(i)
//     }
//     return nums[stack[0]]
// };
var singleNumber = function(nums) {
    let res
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        if(map.get(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
        }else{
            map.set(nums[i],1)
        }
    }
    // console.log(map);
    map.forEach((value,key)=>{
        // console.log(key,value)
        if(value == 1) {
            res = key
        }
    })
    return res
};
console.log((singleNumber(nums = [4,1,2,1,2])))