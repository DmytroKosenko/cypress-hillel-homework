//let x = 5; let y = 5; Use the addition assignment (*=) operator that will result in x being 25 (same as x = x * y).
let x = 5;
let y = 5;
x *= y;
console.log(x);

//create new variable 'let1' in lower case.
let let1 = "this is my homework after lesson 4!";
console.log(let1);

//Update value 'let1' to upper case.
let1 = let1.toUpperCase();
console.log(let1);

//Create another variable with few words and contain 'let1'.
let let2 = " I hope I did it well";
let2 = let1.concat(let2);
console.log(let2);

// use method replace to word 'BANG'
let2 = let2.replace("well", "BANG");
console.log(let2);

//create comparison operator to log true, when x is NOT equal to y.
let trueVariable = !(x == y);
console.log(trueVariable);

//create variable with using addition assignment (+=) for two numbers
let q = 9;
let w = 1;
q += w;
console.log(q);

//create variable that should be 'false' with using equality operator
let falseVariable = let1 == q;
console.log(falseVariable);
