/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    for(let i in strs) {
        // console.log(strs[i])
        // console.log(strs[i])
        let array = Array.from(strs[i])
        // console.log(array)
        let key = array.sort().toString()
        let list = map.get(key) ?
        map.get(key) : new Array();
        list.push(strs[i])
        map.set(key,list)
    }
    return Array.from(map.values())
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))