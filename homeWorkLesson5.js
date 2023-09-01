//rewrite to while → for (let i = 0; i < 3; i++) {console.log( `number ${i}!` );}

let num = 0;
while (num < 3) {
  console.log(`number ${num}!`);
  num++;
}

//create a loop from 0 to 10, inside create a variable 'NotDivide', and assign numbers that can't divide 2 and console every time that number.

for (let i = 0; i <= 10; i++) {
  let NotDivide;
  if (i % 2 != 0) {
    NotDivide = i;
    console.log(NotDivide);
  }
}

//create loop with condition from 0 to 10, and jump to the next iteration when i is 5.

for (let i = 0; i <= 10; i++) {
  if (i == 5) continue;
  console.log(i);
}

//create if/else for checking numbers, if lower than 10 console 'Hello', if higher than 10 console 'Bye'

for (let i = 6; i <= 15; i++) {
  if (i <= 10) {
    console.log("Hello");
  } else {
    console.log("Bye");
  }
}
