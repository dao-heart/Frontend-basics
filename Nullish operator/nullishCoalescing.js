// Nullish coalescing operator
// checks for the nulls or undefined.
// Judge the expression is defined.
let result = a ?? b // If a is defined else b
let user;
alert(user ?? "Anonymous"); // Anonymous
// If defined
let user = "John";

alert(user ?? "Anonymous"); // John

// Difference 
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

