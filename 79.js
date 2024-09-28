/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let length = board.length
    let width = board[0].length
    let used = new Array(length).fill(null).map(()=>new Array(width).fill(1))
    const dfs = (x, y, index) => {
        if (index === word.length) return true;  // 如果匹配到最后一个字符，返回 true
        if (x < 0 || x >= length || y < 0 || y >= width || used[x][y] === 0 || board[x][y] !== word[index]) {
            return false;  // 如果越界、已经使用、或字符不匹配，返回 false
        }  
        used[x][y] = 0;  // 标记当前位置为已访问
        // 向四个方向递归查找
        if (dfs(x + 1, y, index + 1) ||  // 向下
            dfs(x - 1, y, index + 1) ||  // 向上
            dfs(x, y + 1, index + 1) ||  // 向右
            dfs(x, y - 1, index + 1)) {  // 向左
            return true;
        }
        used[x][y] = 1;  // 如果当前路径不匹配，将当前位置重置为未访问
        return false;
    };
    for(let i = 0; i < length; i++){
        for(let j = 0; j < width; j++){
            if(board[i][j] === word[0]){
                if(dfs(i,j,0)) return true
            }
        }
    }
    return false
};
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],'ABCCED'))