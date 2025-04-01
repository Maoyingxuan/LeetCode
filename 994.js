/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let dfs = (i,j,time)=>{
        if(i < 0 || i >= grid.length || j < 0 || j >=grid[0].length || grid[i][j] == 0 || (T[i][j] !== -1 && T[i][j] <= time)){
            return
        }
        if(T[i][j] == -1){
            T[i][j] = time
        }else{
            T[i][j] = Math.min(time,T[i][j])
        }
        dfs(i-1,j,time+1)
        dfs(i+1,j,time+1)
        dfs(i,j-1,time+1)
        dfs(i,j+1,time+1)
    }
    let T = new Array(grid.length);
    for (let i = 0; i < grid.length; i++) {
    T[i] = new Array(grid[0].length).fill(-1);
    }
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == 2){
                dfs(i,j,0)
            }
        }
    }
    let ans = 0
    for(let i = 0; i < T.length; i++){
        for(let j = 0; j < T[0].length; j++){
            if(grid[i][j] && T[i][j] == -1){
                return -1
            }
            ans = Math.max(ans,T[i][j])
        }
    }
    console.log(ans);
    return ans
};
orangesRotting([[0,1],[2,0]]) 