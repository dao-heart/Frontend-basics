'use strict'
// executor is the callback
/**
 * executor = (resolve, reject) => setTimeout(()=>resolve(1000), 2000)
 * 
 */
 const executor = (resolve,reject, cb) => {}
 
 class Promifill {

    constructor(executor){
        if (typeof executor !== "function"){
            throw new Error("Promise resolver must be a function");
        }
        this.state = "PENDING";
        this.value = undefined;
        this.callBacks = [] 
        this.errorCallbacks = []
        executor(this.resolve.bind(this), this.reject.bind(this))  
    }
    resolve = (value) =>{
        this.value = value;
        this.state = "FULFILLED";
        this.callBacks.forEach((callback)=>{
            callback(this.value)
        })}
    reject = (value) =>{
       this.value = reason;
       this.state = "REJECTED";
       this.errorCallbacks.forEach((callback)=>{
        callback(this.value)
    })}
    then(callback){
    this.callBacks.push(callback)
    return this
    }
    catch(callback){
    this.callBacks.push(callback)
    return this
    }
 }


