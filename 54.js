/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length<=1) return matrix[0]
    if(matrix[0].length<=1){
        let res = []
        for(let i = 0;i < matrix.length;i++){
            res.push(matrix[i][0])
        }
        return res
    }
    let res = []
    let m = matrix.length
    let n = matrix[0].length
    let k = 0
    let s = Math.min(m,n)
    let r = Math.floor(s/2)
    // console.log(r);
    while(k<r){
        for(let i = k; i < n-1-k; i++){
            res.push(matrix[k][i])
        }
        for(let i = k; i < m-1-k; i++){
            res.push(matrix[i][n-k-1])
        }
        for(let i = n-k-1;i > k; i--){
            res.push(matrix[m-k-1][i])
        }
        for(let i = m-1-k; i>k; i--){
            res.push(matrix[i][k]);
        }
        k++
    }
    if(s%2==1){
        if(m<n){
            for(let i = k; i<n-k;i++){
                res.push(matrix[k][i])
               }   
        }  
        if(m>n){
            for(let i = k; i<m-k;i++){
                res.push(matrix[i][k])
               }   
        } 
        if(m===n) res.push(matrix[k][k])
    }
    // console.log(res);
    return res
};
console.log(spiralOrder([[2,3,4],[5,6,7],[8,9,10],[11,12,13]]))