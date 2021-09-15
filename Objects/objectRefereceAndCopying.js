'use strict'

// Object references and copying 

// object are copied by ref, primitives are copied by value

let message = "Hello!";
let phrase = message;

// We have two independent variables each store the string Hello


// A variable assigned to the obj stores the address in memory i.e. reference.
// when an object is copied, the reference variable is copied not the obj itself


let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference


// comparison of reference
let a = {}; 
let b = a;
alert(a==b) // true, both refers to same object
alert(a === b) // true


let a = {}
let b = {}
// two independent objects
alert(a==b) // false

// Cloning and merging
// Object.assign(dest, [src1, src2, src3...])

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
// If property already exists, Its overwritten.


// Note: const can be modified when storing an object.
// This is because the obj reference is stored in const and change in obj doesn't effect in reference.

const user = {
    name: "John"
  };
  
  user.name = "Pete"; // (*)
  
  alert(user.name); // Pete





// Deep clone.
function cloneObj (obj){
    let copyObj = {}
    for (let k in obj){
        if (typeof obj[k] === "object"){
            copyObj[k] = cloneObj(obj[k]);
        }
        else{
            copyObj[k] = obj[k]
        }
    }
}




