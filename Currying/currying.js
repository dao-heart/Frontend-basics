'use strict'

// coverting f(a,b,c) -> f(a)(b)(c)

// convert function into currying


function sum (a,b) {
    return a + b
}


// Currying this function 

function currying(sum){

    return function(a){
        return function(b){
            return sum(a,b)
        }
    }
}
let curriedSum = currying(sum)(1)(2)

console.log(curriedSum)



/// Create a generic currying function



function curry(func){

    return function curried (...args){

        if (args.length >= func.length){
            return func.apply(this, args);
        }
        else {
            return function (...args2){
                return curried.apply(this, args.concat(args2))
        }}

    }

}
// No-limit Currying

const f = n => m => m?f(m+n):n


// Long for of infinite currying

function infSum(m){
        return function(n){
            if(n){
                return infSum(m+n)
            }
            else{
                return m
            }
    }

}

function curry(func){

    return function (...args){
        if (func.length<=args.length){
            return func.apply(this,args)
        }
        else{
            return function(...args2){
                return func.apply(this, args.concat(args2))
            }
        }
    }



}