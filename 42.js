/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0
    let length = height.length
    let right = length - 1
    let left_max = 0, right_max = 0
    let ans = 0
    while(left<right){
        if(height[left]<height[right]){
            if(height[left] >= left_max)
            {
                left_max = height[left]
            }else{
                ans += left_max - height[left]
            }
            left++
        }
        else{
            if(height[right] >= right_max){
                right_max = height[right]
            }else{
                ans += right_max - height[right]
            }
            right--
        }
    }
    // console.log(ans)
    return ans
};
trap([4,2,0,3,2,5])