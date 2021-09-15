// Comparisons 
// Boolean is the result usually

// String Comparison - letter comparison
alert('z'>'a') // true
alert('Glow'>'Glee')  // true
alert('Bee'>'Be') // true 
// Compares letter to letter
// Otherwise  next  letter
// Repeats until end of one of the  strings


// Comparison of different types
alert('2'>1) // true
alert('01'==1) // true

// A funny consequence
let a = 0;
alert(Boolean(a)); // false
let b = "0";
alert(Boolean(b)); // true
alert(a==b); //true

// Comparison with null and undefined
alert(null===undefined); // false
alert(null==undefined); // true

// Strange result
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true



