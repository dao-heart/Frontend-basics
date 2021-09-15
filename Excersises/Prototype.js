// Explain how prototypal inheritance works

// Create a parent object

class Parent {
    constructor(){
        this.name = "Parent"
    }
}

Parent.prototype.greet = function(){
console.log("Hello from Parent")
}

let child = Object.create(Parent.prototype) // create a child object based on parent object

child.cry = function(){
    console.log("Cry")
}

console.log(child.cry())
console.log(child.greet()) // Method comes from prototype

// The object constructor name will be parent since the object is created from prototype

function Child(){
    Parent.call(this)
    this.name = "child"
}
Child.prototype = Parent.prototype
Child.constructor.name = "child"
console.dir(Child.constructor)