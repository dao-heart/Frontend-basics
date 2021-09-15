"use strict"

const poll = ({fn, validate, inteval, maxAttempts}) => {

    let attempts = 0

    const executePoll = async (resolve, reject) =>{
        const result = await fn();
        attempts++;
    
    if (validate(result)){
        resolve(result)
    } else if (maxAttempts && attempts === maxAttempts){
        return reject(new Error("Max no of attempts"))
    } else {
        setTimeout(executePoll, interval, resolve, reject)
    }

}}




const poll = ({fn , validateCb, maxAttempts, duration}) => {

    let attempts = 0;

    const apiCall = (...args) => async (resolve, reject) =>{
        const value = await fn.apply(null, args).then(res => res.json());
        attempts++;
        if (validateCb(value)){
            resolve(value)
        }
        else if (attempts >= maxAttempts){
            reject(new Error("Max attempts reached"))
        }
        else{
            setTimeout(apiCall, duration, resolve, reject);
        }

    }

    return apiCall

}