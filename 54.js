var spiralOrder = function(matrix) {
    let dir = [[0,1],[1,0],[0,-1],[-1,0]]
    let m = matrix.length
    let n = matrix[0].length
    let size = m*n
    let ans = []
    let i = 0; j = -1
    for(let di = 0; ans.length < size; di = (di+1)%4){
        for(let k = 0; k < n; k++){ //走n步
            i+=dir[di][0]
            j+=dir[di][1]
            ans.push(matrix[i][j])
        }
        [n,m] = [m-1,n]
    }
    return ans
};
console.log(spiralOrder(matrix = [[1,2,3],[4,5,6],[7,8,9]]));
