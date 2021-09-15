'use strict'

let value = true;
alert(typeof(value));


// Convert to String
value = String(value);
alert(typeof(value));

// Convert to Number
let str = "123";
alert(typeof str);

let num = Number(str);
alert(num)
alert(typeof num);
// undefined -> NaN
// null -> 0
// true and false -> 1,0
// string -> 0 if empty else NaN

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0


//Boolean Conversion
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

// unary -> only effects non-numbers
// Converts non-numbers like Numbers
// High precedence
alert( +true ); // 1
alert( +"" );   // 0

// Assignment -> low precedence
let x = 2 * 2 +1
alert(x) // 5


// Assignment = return value
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0

// Modify in place -> same precedence as Assignment
let n =2;
n *= 3+5
alert(n) // 16

// Increment and decrement ++/-- has the highest precedence

// Comma -> last evaluated and least precedece
let a = (1+2, 3+4)
alert(a) // 7

for (a = 1, b = 3, c = a * b; a < 10; a++) { // c = 3, 
 //   ...
   }

