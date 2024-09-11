/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
// 获取列数（宽度），假设每行的列数相同
    const n = m > 0 ? obstacleGrid[0].length : 0;
    const dp = new Array(m).fill(0)
    for(let i = 0; i<m ; i++){
        dp[i] = new Array(n).fill(0)
    }
    for(let i = 0; i<m ; i++){
        if(obstacleGrid[i][0] == 0)
            dp[i][0] = 1
        else break
    }
    for(let i = 0; i<n ; i++){
        if(obstacleGrid[0][i] == 0)
            dp[0][i] = 1
        else break
    }
    for(let i = 1; i<m;i++){
        for(let j = 1;j<n;j++){
            if(obstacleGrid[i][j]==1)
                dp[i][j] = 0
            else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            }
        }
    }
    return dp[m-1][n-1]
};
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))