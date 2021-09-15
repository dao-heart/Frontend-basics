'use strict'

function throttle(func, limit){
let throttle
return function(){
let context = this;
let args = arguemnts
if (!throttle){
    func.apply(context, args)
    throttle  = true
    setTimeout(()=>throttle = false, limit)

}
}
} 