function Publisher(){
    this.subscribers = [];
}


Publisher.prototype.subscribe = function(observer){ this.subscribers.push(observer);}

Publisher.prototype.publish = function(someText){ this.subscribers.forEach(
    (fn)=>{
    fn.call(this, someText)})
}