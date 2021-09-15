'use strict'

if (!Function.prototype.bind){
    Function.prototype.bind = function(context, args){
        let func = this
        return function(...newArgs){
            func.apply(context, [...args, ...newArgs])
        }
    }
}
