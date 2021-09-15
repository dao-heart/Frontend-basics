'use strict'

// prompt -> has okay and cancel -> returns edited text.
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!

// confirm -> returns true/false
let isBoss =  confirm("Are you the boss?"); //ok->true


// Limitations
// Location is determined by browser
// Look can't be modified
// Can't access rest of the page while modal is visible
// pauses the script execution.


