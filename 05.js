/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let result = ""
    let max = 0
    let len = s.length   
    const find = (i,j,s) => {
        while(i>=0&&j<len&&s[i]==s[j]){
            i--;
            j++;
        }
        return s.slice(i+1,j)
        // if((j-i-1)>max){
        //     result = s.slice(i+1,j)
        //     max = j-i-1
        //     // console.log("max" + max)
        //     // console.log(result)
        // }       
    }
    for(let i = 0; i<len;i++){
        let res1 = find(i,i,s)
        let res2 = find(i,i+1,s)
        if(Math.max(res1.length,res2.length)>max){
            max = Math.max(res1.length,res2.length)
            if(res1.length>res2.length){
                result = res1
            }
            else result = res2
        }
    }
    console.log(result)
    return result
};
longestPalindrome('ababa')