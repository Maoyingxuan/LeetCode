/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    const maxPos = new Map()
    for(let i = 0; i < s.length; i++){
        maxPos.set(s[i],i)
    }
    // console.log(maxPos.get('e'));
    let res = []
    let start = 0
    let end = 0;
    for(let i = 0; i < s.length; i++){
        // console.log(s[i]);
        end = Math.max(maxPos.get(s[i]),end)
        // console.log(end);
        if(i === end){
            res.push(end-start+1)
            start = end + 1
            // console.log(res);
        }
    }
    return res
};
partitionLabels("ababcbacadefegdehijhklij")