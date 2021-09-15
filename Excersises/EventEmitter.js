// window.addEventListner("something", fn);

// const myEvent = new EventEmitter();

// function c1(){
// console.log("an event called");
// }

// function c2(){
// console.log("yet another event called");
// }


// myEvent.on('eventOne', c1); // Register event
// myEvent.on('eventOne', c2); // Register event


// myEvent.emit('eventOne) // both events should be invoked.
// an event called.
// yet another event called.


// Once function 
// myEvent.once('eventOne', ()=>{console.log("event once fired")});
// myEvent.emit('eventOne); // event once fired;
// myEvent.emit('eventOne); // doesn't emit anything



class EventEmitter {

    constructor(){
        this.listeners = {} // Key value pair
    }

    
    addEventListener(event, fn){
        if (this.listeners[event]){
            this.listeners[event] = [fn]
        }
        else {
            this.listeners[event].push(fn)
        }
        return this
    }
    on(event, fn){
        return this.addEventListener(event, fn)
    }

    removeEventListener(event, fn){
        if (!this.listeners[event]){
            return this
        }
        else{
            for (let i=0; i< this.listeners[event].length; i++){
                if (fn === this.listeners[event][i]){
                    this.listeners[event].splice(i, 1);
                    break;
                }
            }
        }

        return this // for chaining
        
    }
    off(event, fn){
       return this.removeEventListener(event, fn)
    }

    once(event, fn){
        this.listeners[event] = this.listeners[event] || [];
        const onceWrapper = () => {
            fn();
            this.off(event, fn);
        }

        this.listeners[event].push(onceWrapper)
        return this


    }

    emit(event, ...args){
        let arr = this.listeners[event];
        if (!arr) return false;
        arr.forEach(ele => {
            ele.apply(null, args);
        })
        return true;
    }

    listenerCount(event){
        return this.listeners[event].length
    }

    rawListeners(event){
        return this.listeners[event]
    }

}




