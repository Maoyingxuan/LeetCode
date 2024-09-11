/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    //短数组与长数组
    if(nums1.length > nums2.length){
        [nums1,nums2] = [nums2,nums1]
    }
    let l1 = nums1.length
    let l2 = nums2.length
    let low = 0 
    let high = l1
    while(low <= high){
        let i = low + Math.floor((high-low)/2)
        let j = Math.floor((l1 + l2 + 1) / 2) - i
        const maxLeftA = i === 0 ? -Infinity : nums1[i-1]
        const minRightA = i === l1 ? Infinity : nums1[i]
        const maxLeftB = j === 0 ? -Infinity : nums2[j-1]
        const minRightB = j === l2 ? Infinity : nums2[j]
        if (maxLeftA <= minRightB && minRightA >= maxLeftB) {
        return (l1 + l2) % 2 === 1
          ? Math.max(maxLeftA, maxLeftB)
          : (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
      } else if (maxLeftA > minRightB) {
        high = i - 1
      } else {
        low = low + 1
      }}

};
console.log(findMedianSortedArrays([1,2],[3,4,5]))