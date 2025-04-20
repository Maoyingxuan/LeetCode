/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let m = board.length
    let n = board[0].length
    const change = new Array(m).fill(0)
    for(let i = 0; i < m; i++){
        change[i] = new Array(n).fill(0)
    } 
    // console.log(change);
    const valid = (i,j) => {
        return (i > -1) && (i < m) && (j > -1) && (j < n)
    }
    const check = (i,j) => {
        let living = 0
        for(let w = i-1; w <= i+1; w++){
            for(let h = j-1; h <= j+1; h++){
                if(valid(w,h)){
                    if(!(w==i&&h==j) && board[w][h]){
                    living++
                }
            }   
        }
    }
        // console.log(i,j,living)
        if(living < 2 && board[i][j]) {
            change[i][j] = 1
        }else if(living > 3 && board[i][j]) {
            change[i][j] = 1
        }else if(living == 3 && !board[i][j]){
            change[i][j] = 1
        }
    }
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            check(i,j)
        }
    }
    console.log(change)
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            board[i][j] = board[i][j] == change[i][j] ? 0 : 1
        }
    }
    // console.log(board);
    return board
};
gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])
