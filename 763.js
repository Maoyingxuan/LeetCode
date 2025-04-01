/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let map = new Map()
    for(let i in s){
        map.set(s[i],Number(i))
    }
    // console.log(map);
    let res = []
    res.push(map.get(s[0]))
    for(let i in s){
        if(res[res.length-1] < map.get(s[i]) && i <= res[res.length -1]){
            res[res.length-1] = map.get(s[i])
        }else if(i > res[res.length-1]){
            res.push(map.get(s[i]))
        }
    }
    // console.log(res);
    for(let i = res.length-1; i >-1; i--){
        if(i == 0){
            res[i]++
        }else{
            res[i] = res[i] - res[i-1]
        }
    }
    return res
};
partitionLabels("bceacbacdbbadea")