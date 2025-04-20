function New(constructor,...args){
    let newObj = {}
    newObj.__proto__ = constructor.prototype 
    const res = constructor.apply(newObj, args)
    if((typeof res === "object" && res !== null) || typeof res === "function"){
        return res
    }else{
        return newObj
    }
}