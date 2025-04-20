function throttle (fn, delay){
    let curTime = Date.now()
    return function(...args){
        let context = this
        let nowTime = Date.now()
        if(nowTime - curTime >= delay){
            curTime = nowTime()
            return fn.apply(context,args)
        }
    }
}