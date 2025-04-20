/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = []
    let dir = [[0,1],[1,0],[0,-1],[-1,0]]  //右 -> 下 -> 左 -> 上
    let m = matrix.length
    let n = matrix[0].length
    let i = 0, j = -1 // [0,-1]是入口
    let size = m*n
    for(let di = 0; res.length < size; di = (di+1)%4){
        for(let k = 0; k < n; k++){
            i += dir[di][0]
            j += dir[di][1]
            res.push(matrix[i][j])
        }
        [n,m] = [m-1,n]
    }
    return res
};
console.log(spiralOrder(matrix = [[1,2,3],[4,5,6],[7,8,9]]));
