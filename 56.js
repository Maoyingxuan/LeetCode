/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a,b)=>a[0]-b[0])
    // console.log(intervals);
    let res = []
    res.push(intervals[0])
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] <= res[res.length-1][1]){
            let temp = res.pop()
            res.push([temp[0],Math.max(intervals[i][1],temp[1])])
        }else{
            res.push(intervals[i])
        }
        // console.log(res);
        
    }
    // console.log(res);
    return res
};
merge([[2,3],[4,5],[6,7],[8,9],[1,10]])