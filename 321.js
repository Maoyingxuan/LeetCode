const sort = (nums,k) => {
    if(nums.length == k){
        return nums
    }else{
        let giveup = nums.length - k
        let res = []
        for(let i = 0; i < nums.length; i++){
            while(res.length && nums[i] > res[res.length-1] && giveup){
                res.pop()
                giveup--
            }
            res.push(nums[i])
        }
        while(giveup){
            res.pop()
            giveup--
        }
        return res
    }
}
const compose = (nums1,nums2,k) => {
    let num = []
    let left = 0, right = 0
    for(let i = 0; i < k; i++){
        if(left == nums1.length){
            num[i] = nums2[right]
            right++
        }else if(right == nums2.length){
            num[i] = nums1[left]
            left++
        }else{
            if(nums1[left] > nums2[right]){
                num[i] = nums1[left]
                left++
            }else{
                num[i] = nums2[right]
                right++
            }
        }
    }
    return num
}
var maxNumber = function(nums1, nums2, k) {
    let res = []
    for(let i = 0; i < k && nums1.length >= i && nums2.length >= k-i; i++){
        let a1 = sort(nums1,i)
        let a2 = sort(nums2,k-i)
        console.log(a1,a2);
        let temp = compose(a1,a2,k) 
        if(res == [] || temp.join('') > res.join('')){
            res = temp
        }
    }
    return res  
};
maxNumber(nums1 = [3,9], nums2 = [8,9], k = 3)