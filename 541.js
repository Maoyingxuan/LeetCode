/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let arr = s.split('')
    function reverse(start,end){
        while(start<end){
            let mid = arr[end]
            arr[end] = arr[start]
            arr[start] = mid
            start++
            end--
        }
    }
    // reverse(0,s.length-1)
    // console.log(arr)
    let start = 0
    let end = 2 * k - 1
    while(end < s.length){
        reverse(start,start+k-1)
        start = end + 1
        end = start + 2*k - 1
    }
    if(end - start < k) reverse(start,s.length-1)
        else reverse(start,start+k-1)
    // console.log(arr)
    return arr.join('')
};
reverseStr(s = "abcdefg", k = 2)