/**
 * 
 * Debouncing limits the rate at which the fuction is called
 */


 function debounce(func, timer){
    let debounceTimer
    return function(...args){
        let context = this
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(func.apply(context, args), timer)
    }
 }


 function throttle(func, wait) {
    let isThrottle = false;
    let lastArg
    return function(arg){
    if (!isThrottle){
      isThrottle = true
      func(arg)
      setTimeout(()=>{
        lastArg && func(lastArg)
        isThrottle = false
      },wait)
    }
    else{
      lastArg = arg
    }
    }  
  }
  





 // Without set time out 
 function debounce(func, timer, current = new Date()){
    let newDate = new Date();
     if (newDate - current === timer){
        return func();
     }

 }