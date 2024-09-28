/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res = new Map()
    let stack = []
    for(let i = 0; i < nums2.length; i++){
        while( stack.length && nums2[i] > nums2[stack[stack.length-1]] ){
            res.set(nums2[stack[stack.length-1]],nums2[i])
            stack.pop()
        }
        stack.push(i)
    }
    // console.log(res);
    let ans = new Array(nums1.length).fill(-1)
    for(let i = 0; i < nums1.length; i++){
        ans[i] = res.get(nums1[i]) || -1
    }
    // console.log(ans);
    return ans
};
nextGreaterElement(nums1 = [4,1,2], nums2 = [1,3,4,2])
// 输入：nums1 = [4,1,2], nums2 = [1,3,4,2].
// 输出：[-1,3,-1]
// 解释：nums1 中每个值的下一个更大元素如下所述：
// - 4 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
// - 1 ，用加粗斜体标识，nums2 = [1,3,4,2]。下一个更大元素是 3 。
// - 2 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。