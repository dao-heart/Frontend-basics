'use strict'
// while (condition) {}
// code
// so-called "loop body"

let i = 0
while (i<3){
    alert(i)
    i++;
}

// do .. while loop
let i =3
do {alert(i); i--} while(i>0);


// for loop

for(start;end;step){
alert(i)
}


// while loop using for

for(;i<3;){
    // body
    i--;
}

// break is used to break the loop
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );

//continue is used to skip the iteration
for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
  
    alert(i); // 1, then 3, 5, 7, 9
  }

  // Note: break/complete cannot be used with terinary operator
  // For Example/
  // (i > 5) ? alert(i) : continue; // continue isn't allowed here

  // Break away from multiple loops
  // Dealing with multiple loops by labeling them

  outer: for (let i=0; i<20; i++){
        for(let j =0; j<20; j++){
        let input = prompt(`Value at coords (${i},${j})`, '');

        // if an empty string or canceled, then break out of both loops
        if (!input) break outer; // (*)
      }
  }
  alert("out of the loop");

  // same with the continue i.e continue label

  // Write code to output prime numbers 
  let n= 10;

  nextPrime: for (let i; i<=n; i++) {
    for (j=2;j<i;j++){
      if (i % j === 0) continue nextPrime
    }
  }

  // Repeat until input is true
  let input;

  do {
    input = prompt("Enter number 100");
  } while (input!==100 && input)


   