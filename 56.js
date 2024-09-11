/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res = []
    intervals.sort((a,b)=>(a[0]-b[0]))
    let prev = intervals[0]
    for(let nums in intervals){
        let curr = intervals[nums]
        if(prev[1] >= curr[0]){
            prev[1] = Math.max(prev[1],curr[1])
        }
        else{
            res.push(prev)
            prev = curr
        }
    }
    res.push(prev)
    return res
};
merge([[1,3],[8,10],[2,6],[15,18]])