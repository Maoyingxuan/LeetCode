function New(constructor,...args){
    let newObj = {}
    obj.__proto__ = constructor.prototype 
    const res = constructor.apply(obj, args)
    if((typeof result === "object" && result !== null) || typeof result === "function"){
        return res
    }else{
        return newObj
    }
}