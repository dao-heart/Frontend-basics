'use strict'
let arr = [1,2,[3,4, [5,6, [7, [8, 9, 10]]]]]
function flatten(arr){
    let res = []
    arr.reduce((accumulator, currentValue) => {
        if (Array.isArray(value)){
            accumulator.concat(flatten(value))
        }
        else {
            accumulator.concat(value)
        }
        return accumulator
    }, [])
    return accumulator
}


if (!Array.prototype.flatten){
    Array.prototype.flatten = function(){
        return flatten(this)
    }
}