/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let max = Math.max(...height)
    let sq = 0
    //从左往右
    let i = 0 
    let temp = 0
    while(height[i]!==max){
        if(height[i] > temp){
            temp = height[i]
        }
        sq += max - temp
        i++
    }
    let k = height.length - 1
    temp = 0
    while(height[k]!==max){
        if(height[k] > temp){
            temp = height[k]
        }
        sq += max - temp
        k--
    }
    for(let i = 0; i < height.length; i++) sq += height[i]
    return (max * height.length - sq)
    
};
trap([4,2,0,3,2,5])