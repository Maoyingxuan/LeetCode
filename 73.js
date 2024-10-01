/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length
    let zero = []
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(!matrix[i][j])zero.push([i,j])
        }
    }
    // console.log(zero);
    zero.forEach(([x,y])=>{
        // console.log(x,y);
        for(let i = 0;i<n;i++) matrix[x][i] = 0 
        for(let i = 0;i<m;i++) matrix[i][y] = 0 
    })
    // console.log(matrix);
    return matrix 
};
setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])
