// Logical Operators
'use strict'


// OR operator
let result = a || b 
// If operands are not Boolean, It converts them into boolean
// For each operand, If true, return the original value of that operand
// If all the operands have been evaluated are false then return last operand
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder


// Short-circuit evaluation
true || alert("not printed");
false || alert("printed");


// And Operator
let result = a && b;
// And finds the first falsy value
let result = value1 && value2 && value3;
/// If operands are not Boolean, It converts them into boolean
// For each operand, If false, return the original value of that operand
// If all the operands have been evaluated are true then return last operand
// Note: && precedence is higher than ||


// Not - !
let result = !value;
// Converts true to false, Inverts value
// A double not -> used to convert a value to boolean
alert(!!("non-empty string")); // true
alert( !!null ); // false.
//The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||




