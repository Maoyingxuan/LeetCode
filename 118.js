/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows===1) return [[1]]
    if(numRows===2) return [[1],[1,1]]
    if(numRows >= 3) {
        let res = new Array(numRows).fill(null)
        for(let i = 0; i<res.length;i++){
            res[i] = new Array(i+1).fill(1)
        }
        for(let i = 2;i < res.length;i++){
            for(let j = 1; j<res[i].length-1;j++){
                res[i][j] = res[i-1][j-1]+res[i-1][j]
            }
        }
        return res
    }
};
generate(5)