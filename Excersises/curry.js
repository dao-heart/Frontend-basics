
function curry(fn, context = this, ...args){
        return function _curry(...args2){
            if (fn.length <= args.length){
                return fn.apply(context, args)
            }
            else {
                return _curry.apply(context, args.concat(args2))
            }
        }
    

}