// fn.apply(thisArg,argsArray)
Function.prototype.myapply = function(thisArg,argsArray){
    if(typeof this !== 'function'){
        throw new Error('error')
    }
    let res
    thisArg = thisArg || window
    thisArg.fn = this
    if(!argsArray){
        res = thisArg.fn()
    }else{
        res = thisArg.fn(...argsArray)
    }
    delete thisArg.fn
    return res
}