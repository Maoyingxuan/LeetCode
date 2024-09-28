/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length + 1)
    let stack = []
    for(let i = 0; i < result.length; i++){
        while(stack.length !==0 && temperatures[i] > temperatures[stack[stack.length-1]]){
            stack.pop()
            let j = stack.pop()
            result[j] = i - j
        }
        stack.push(i)
    }
    return result
};