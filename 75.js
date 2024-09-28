/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    let p = 0
    let q = nums.length-1
    for(let i = 0; i <= q; i++){
        if(nums[i] === 0){
            swap(nums,p,i)
            p++
        }else if(nums[i] === 2){
            swap(nums,q,i)
            q--
        }
    }
};
sortColors(nums = [2,0,2,1,1,0])