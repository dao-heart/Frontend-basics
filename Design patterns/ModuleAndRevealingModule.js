//// Object Literal structure
//// No need for new
// var objectLiteral = {

//     varKey: varvalue,
//     functionKey: function (){}

// }

/* Module Pattern
* Used for encapsulating code.
* Can be used to store private methods and variables and protect them from leaking to global namespace
* Uses concepts like closure.
* Uses namesace pattern and IIFE (Immediatly invoked function expressions)
rtype: object
*/

// Simple patter

var myModule = (function (){

    var myPrivateCounter = 0
    function myPrivateIncrementMethod (){

        ++myPrivateCounter
        myPublicDisplayMethod();

    }
    function myPrivateDecrementMethod(){

        --myPrivateCounter
        myPublicDisplayMethod()
    }
    function myPublicDisplayMethod(){
        console.log("this is a public method", myPrivateCounter)
    }

    return {
        myPublicIncrementMethod: function(){
            myPrivateIncrementMethod();
        },
        myPublicDecrementMethod:function(){
            myPrivateDecrementMethod();
        },
        message: function (){
            return `the count is ${myPrivateCounter}`
        },
        myPublicDisplayMethod:myPublicDisplayMethod

    }



})();


myModule.myPublicDisplayMethod = function (){
    console.log("this is a new public method", 1)
}
// myModule.myPublicDisplayMethod()
// myModule.myPublicIncrementMethod()
// myModule.myPublicIncrementMethod()
// console.log(myModule.message())
// myModule.myPublicDecrementMethod()
// console.log(myModule.message())
// myModule.myPublicIncrementMethod()
// console.log(myModule.message())

// Result
// this is a new public method 1
// this is a public method 1
// this is a public method 2
// the count is 2
// this is a public method 1
// the count is 1
// this is a public method 2
// the count is 2


// Revealing module.
// Declare all modules as private and expose needed once with public pointer
var myRevealingModule = (function () {
 
    var privateCounter = 0;

    function privateFunction() {
        privateCounter++;
    }

    function publicFunction() {
        publicIncrement();
    }

    function publicIncrement() {
        privateFunction();
    }

    function publicGetCount(){
      return privateCounter;
    }

    // Reveal public pointers to
    // private functions and properties

   return {
        start: publicFunction,
        increment: publicIncrement,
        count: publicGetCount
    };

})();

myRevealingModule.start();


