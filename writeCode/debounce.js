//n秒内重新计时
function debounce(fn, wait){
    let timer = null
    return function(...args){
        const context = this
        if(timer){
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(()=>{
            fn.apply(context,args)
        },wait)
    }
}