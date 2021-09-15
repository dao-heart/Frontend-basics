'use strict'

let user = {
    let:1,
    for:2,
    return:3
};
alert(user.for + user.let + user.return);

let obj = {};

obj.__proto__ = 5; // assign a number
alert(obj.__proto__); // [object Object] - the value is a object, didn't work as intended

// If key does't exist
let user = {}
alert(user.noSuchProperty === undefined); // trye means "no such property"

// "in"
"key" in object // true if key is present


let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

// specal case where in only works

let obj = {
    test: undefined
}
alert(obj.test); // its undefined , so no property exists
alert("test" in obj); // true



// Iterate through keys in object

for (let key in user){ // different from for(;;)
    // do something
}

// Object properties order

// If keys are intergers -> ascending order
// If not integers ->  creation order

// Task

let obj = {
    name:"John",
    surname:"Smith",
    name:"Pete",

};
 delete obj.name; 


 // check for emptiness
 function isEmpty(obj){

    for(let k in obj){
        // Return false if the loop starts
        return false;
    }
    // else empty object
    return true;
 }

 // Add salaries
function salariesSum(salaries){
let total = 0;
for (let k in salaries){
    total = total + salaries.k
}
return total
}
// Multiply numeric properties

function multiplyNumeric(obj) {
    
    /* your code */
    for (let k in obj){
      if (typeof obj[k] === 'number') {
       obj[k] *= 2;
      }
    }
  
  }


