'use strict'

let user = {
    name: "John",
    age: 30
};


user.sayHi = function(){
    alert("Hello");
}

user.sayHi(); // Hello

// If the method wants to access the current object name

let user = {
    name: "John",
    age:30,
    sayHi: function(){
        alert("Hello " + user.name);
    }
};

// If the object is copied to new reference 
let admin = user;

admin.sayHi(); // this results in error "Cannot read property 'name' of null"

// To avoid this, this is represents the object `before dot` in user.name
// The above function is refactored as 


let user = {
    name: "John",
    age:30,
    sayHi(){
        alert("Hello " + this.name);
    }
};

let admin = user;
admin.sayHi(); // Hello John


// Calling without object this === undefined

