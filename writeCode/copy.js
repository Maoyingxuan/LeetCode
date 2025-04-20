function shallowCopy(obj){
    if (!obj || typeof obj !== "object") return;
    let newObj = Array.isArray(obj)?[]:{}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(obj[key]);
            newObj[key] = obj[key]
        }
    }
    return newObj
}
function deepCopy(obj){
    if (!obj || typeof obj !== "object") return;
    let newObj = Array.isArray(obj)?[]:{}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(obj[key]);
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
        }
    }
    return newObj
}
console.log(shallowCopy({a:1,b:2}))