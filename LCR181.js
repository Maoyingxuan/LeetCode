/**
 * @param {string} message
 * @return {string}
 */

var reverseMessage = function(message) {
    const reverse = (ele) =>{
        let len = ele.length
        let l = 0, r = len-1
        while(l < r){
            [ele[l],ele[r]] = [ele[r],ele[l]]
            l++
            r--
        }
    }
    let arr = message.split(" ").filter((word)=>word.length > 0)
    // console.log(arr)
    reverse(arr)
    // console.log(arr);
    return arr.join(" ")
};
console.log(reverseMessage(message = "  hello world!  "))