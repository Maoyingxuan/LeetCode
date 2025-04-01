/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = []
    stack.push(-1)
    let max = 0
    for(let i in s){
        if(s[i] === '('){
            stack.push(i)
            // console.log(stack);         
        }else{
            stack.pop()
            // console.log(stack);
            if(stack.length == 0){
                stack.push(i)
                // console.log(stack);
            }else{
                let len = i - stack[stack.length-1] 
                max = Math.max(len,max)
            }
        }
    }
    // console.log('res'+max);
    return max
};
longestValidParentheses("")