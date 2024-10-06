/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let num_stack = []
    let str_stack = []
    let res = ''
    let num = 0
    for(let char of s){
        // 如果是数字   
        if(!isNaN(char)){
            num = num * 10 + Number(char)
        }else if(char=='['){
            num_stack.push(num)
            num = 0
            str_stack.push(res)
            res = ''
        }else if(char==']'){
            let repeat_times = num_stack.pop()
            res = str_stack.pop() + res.repeat(repeat_times)
        }else{
            res += char
        }
    }
    return res
};
decodeString(s)