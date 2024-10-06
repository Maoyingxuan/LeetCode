/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let low = 0 
    let length = matrix.length
    let width = matrix[0].length
    let high = length * width - 1
    while(low <= high){
        let mid = Math.floor((high - low)/2) + low
        let x = Math.floor(mid/width)
        let y = mid % width
        if(matrix[x][y] === target) return true
        if(matrix[x][y] < target){
            low = mid + 1
        }
        if(matrix[x][y] > target){
            high = mid - 1
        }
    }
    return false
};
searchMatrix(matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3)