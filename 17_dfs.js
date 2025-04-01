/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0) return []
    const res = []
    const num_to_char = new Map()
    num_to_char.set(2,'abc')
    num_to_char.set(3,'def')
    num_to_char.set(4,'ghi')
    num_to_char.set(5,'jkl')
    num_to_char.set(6,'mno')
    num_to_char.set(7,'pqrs')
    num_to_char.set(8,'tuv')
    num_to_char.set(9,'wxyz')
    // console.log(num_to_char);
    const dfs = (str,i)=>{
        if(i == digits.length){
            res.push(str.slice())
            return
        }
        let strs = num_to_char.get(digits[i])
        for(let j = 0; j < strs.length; j++){
            str = str + strs[j]
            dfs(str,i+1)
            str = str.slice(0,-1)
        }
    }
    dfs('',0)
    return res
};
console.log(letterCombinations('2'))
