/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(p.length > s.length) return []
    const map = new Map()
    let res = []
    for(let item of p){
        map.set(item,(map.get(item)||0)+1)
    }
    // console.log(map);
      let r = 0
    for(;r < p.length; r++) {
    if (map.has(s[r])) {
      map.set(s[r], map.get(s[r]) - 1)
    //   console.log(map);
    }
}
    for (let l = 0; r <= s.length; r++, l++) {
        // console.log([...map.values()].every(v=>v==0));
    if ([...map.values()].every(v => v === 0)) {
      res.push(l)
    }
    if (map.has(s[l])) {
      map.set(s[l], map.get(s[l]) + 1)
    }
    if (map.has(s[r])) {
      map.set(s[r], map.get(s[r]) - 1)
    }
}
    // console.log(res);
    return res
}
findAnagrams(s = "cbaebabacd", p = "abc")