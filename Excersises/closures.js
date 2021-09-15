// closures

function a(){
    var x = 10;
    return function b(){
        var y = 20
        return function c(){
            console.log(x+y)
        }
    }



}
a()()();


// Data encapsulation
function secretCounter(){

    var count = 0
    function incrementCount(){
        count ++;
    }

    function print(){
        console.log(count)
    }

    return {
incrementCount,
        print
    }


}

let counter1 = secretCounter()
counter1.incrementCount()
counter1.incrementCount()
counter1.print() 


let counter2 = secretCounter()
counter2.incrementCount()
counter2.print() 

// Performant and scalable

function SecretCounter(){
    this.count = 0
}

SecretCounter.prototype.increase = function(){
    this.count ++ 
}
SecretCounter.prototype.print = function(){
    console.log(this.count)
}

