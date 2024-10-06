/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length
    let n = matrix[0].length
    let i = 0,j = 0
    while(i+1<m&&j+1<n&&matrix[i+1][j+1]<=target){
            i++
            j++
    }
    // console.log(i,j)
    for(let s = 0; s <= i; s++){
        if(matrix[s][j] === target) return true
    }
        for(let s = 0; s <= j; s++){
        if(matrix[i][s] === target) return true
    }
    return false
};
console.log(searchMatrix(matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5))