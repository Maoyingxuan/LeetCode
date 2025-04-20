/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations = citations.sort((a,b)=>b-a)
    let res = 0
    for(let i = 0; i < citations.length; i++){
        if(citations[i] <= i+1){
            res = Math.max(res,citations[i])
        }
    }
    // console.log(res);
    return res
};
hIndex([1,3,1])
