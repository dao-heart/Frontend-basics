// Singleton Pattern


var mySingleton = (function () {

var instance 
function privateMethodToCreateObject(){ // init

    var privateVariable = "private variable"
    var privateMethod = function(){
        console.log("PrivateVar")
    }
    var randomNumber = Math.random();
    return {

        publicMethod : function(){
            console.log("This is a public method")
        },
        getRandomNumber : function(){
            return randomNumber
        },
        publicVariable:"This is a public variable"

    }

    
}

return {
    getInstance: function (){
        if (!instance){
            instance = privateMethodToCreateObject()
        }
        return instance
    }
}



})();

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA.getRandomNumber() === singleB.getRandomNumber() ); // true
 
