/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let m = matrix.length
    //先水平翻转，再对角线翻转
    for(let i = 0; i < Math.floor(m/2);i++){
        [matrix[i],matrix[m-i-1]] = [matrix[m-i-1],matrix[i]]
    }
    for(let i = 0; i < m;i++){
        for(let j = 0; j < i; j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }
    return matrix
    
};
(rotate([[1,2,3],[4,5,6],[7,8,9]]))