/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let left = 0, right = 0
    let map = new Map()
    let ans = []
    let len = s.length+1
    for(let char of t){
        map.set(char,(map.get(char))?(map.get(char)+1):1)
    }
    while(right<=s.length){
        // [...map.values()].every((value)=>console.log(value))
        if([...map.values()].every((value)=>value<1)){
            let temp_len = right - left 
            if(temp_len<len){
                len = temp_len
                ans = [left,right]
            }
            if(map.get(s[left])!==undefined){
                map.set(s[left],map.get(s[left])+1)
            }
            left++
            continue
        }
        // console.log(map.get(s[right]));
        if(map.get(s[right])!==undefined){ 
            map.set(s[right],map.get(s[right])-1)
        }
        right++
    }    
    console.log(ans);
    if(!ans.length) return ""
    return s.slice(ans[0],ans[1])
};
console.log(minWindow(s = "aa", t = "aa"))