// 8 - data types
// javascript is dynamically typed


// Number - int and float
// special numbers - Infinity
alert(1/0); // Infinity
// NaN represents erroneous
// Any operation to NaN returns NaN


//BigInt -  > abs(2^32 -1)
// the n at the end represnts BigInt
const bigInt = 1234567890123456789012345678901234567890n;
// not compatible with IE


//String 
// Double quotes
// Single quotes
// Back tickers
let name ='John';
alert(`Hello ${name}`)
// no char type in javascript


//Boolean
let nameFieldChanged = false;
//By comparison
let isGreater = 1<4; // true


//null value
// represents empty
let age = null;
// doesn't represents reference to a non-existing object or 'null-pointer'
// represents nothing, empty, unknown

//undefined
// means value not assigned
// declared and not assigned
let age;
alert(age); // undefined


//Object and Symbol
//primitive object
// {}

//typeof
// can be used as a func and operator - same
typeof 0 //number
typeof(0) //number
typeof null // object - bug from old js
typeof alert // function
typeof Symbol("id") // "symbol"

