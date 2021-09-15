// Construction of objects 

// Basic Constructor
function Car(make, year, miles){
    this.make = make;
    this.year = year;
    this.miles = miles;
    this.display = function(){
        return `${this.make} is of ${this.year} has ${this.miles}`;
    }
}

var car1 = new Car("Honda", 1996, 2000);

// Honda is of 1996 has 2000
// console.log(car1.display())

/// If multiple objects are being created, avoid duplication


// Constructor with prototype
function Vehicle(make, year, miles){
    this.make = make;
    this.year = year;
    this.miles = miles;
    
}

Vehicle.prototype.display = function(){
    return `${this.make} is of ${this.year} has ${this.miles}`;
}

var vehicle = new Vehicle("Volvo", 1997, 2000);

// Volvo is of 1997 has 2000 
// console.log(vehicle.display())