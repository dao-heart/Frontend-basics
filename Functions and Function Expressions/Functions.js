'use strict'

// Function Declaration 
function showMessage(){
    alert('Hello everyone!')
}

// Local variables 
function showMessage(){
    let message = "Hello, I'm Javascript!" // local variable
    alert(message);
}

// Outer variables
let user = "John";

function showMessage(){
    let message = "Hello, " + user;
    alert(message);
}

showMessage(); // Hello, John

// functions can change outer variable values
let userName = 'John';

function showMessage(){
    userName = "Bob"; // declare a local variable 
    let message = "Hello, " + userName; // Bob
    alert(message); 
}
alert(userName); // John
showMessage();
alert(userName); //  Bob

// functions prefer local variables to local variables
let userName = 'John';

function showMessage(){
    let userName = "Bob"; // declare a local variable 
    let message = "Hello, " + userName; // Bob
    alert(message); 
}

showMessage();
alert(userName); // John, unchanged

// Default values
function showMessage(from = "SomeOne", text="Hello"){
    alert(from + ":"+ text)
}
showMessage(); // SomeOne: Hello

// Alternate values

function showMessage(from){
    result = from ?? "Unknown"
    alert(result)
}

showMessage(); // Unknown
showMessage(0); // 0
showMessage("Something") // Something

// Tasks
// Rewrite func

function checkAge(age){
    if (!age){
        return
    }
    if (age>18){
        return true
    }
    else {
        return confirm("Do you have your parents consent??")
    }
}


/// Function expressions

// Function declaration
function sayHi(){
    alert("Hello")
}


// Functioin expression
// Declared and assigned to a variable
let sayHi = function(){
alert("Hello")
}


alert(sayHi) // Shows the function code.


// Copy a function
let func = sayHi;


// Callback functions
// question -> string
// yes -> function
// no -> function
function ask(question, yes, no){

    if(prompt(question)) yes()
    else no();

}
// call back functions
function showOk(){
    alert("Ok")
}
// call back functions
function showOk(){
    alert("You cancel")
}
// pass functions as params
ask("Do you agree?", showOk, showCancel);

// Function Declaration can be called even before the declaration
// That is not the case for the function expression.