/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = []
    let hash = new Set()
    for(let i of nums1){
        hash.has(i) || hash.add(i)
    }
    // console.log(hash);
    for(let i of nums2){
        hash.has(i) && res.push(i) && hash.delete(i)
    }
    // console.log(res);
    return res
};
intersection(nums1 = [4,9,5], nums2 = [9,4,9,8,4])