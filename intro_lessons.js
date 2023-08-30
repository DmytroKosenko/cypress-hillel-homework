// let symbol = Symbol()

// String
// let stringOne = 'Original text'
// let stringTwo = 'Second text'
// let stringPhrase = `let says ${stringOne}`
// console.log(stringPhrase)

//Number
//let number = 1
//console.log (number);

// Boolean
//let boolTrue = true;
//let boolFalse = false;

// NULL
//let nullOne = null;
//console.log(nullOne);

// undefined
//let undOne
//let undTwo = undefined;

// typeOf
//let variable = 123;
//console.log(typeof variable);

// let myVar = "We are good";

// let myVariable1 = "Hello";
// let myVariable2 = "World";
// console.log(`${myVariable1} ${myVariable2}`);

// let myVariable = "value";
// console.log(typeof myVariable);

// let name2 = "myName";
// console.log(`hello ${name2}`);

// let num1 = 3;
// let num2 = 5;

// let sum = `${num1 + num2}`;

// console.log(sum);

// let operPercent = 5 % 2;
// console.log(operPercent);

// let operModul = 2 ** 5;
// console.log(operModul);

// let x = 5;
// let x2 = "five";
// let resComparison = x == x2;
// console.log(resComparison);

// let x3 = 5;
// let x4 = "5";
// // x4 = Number(x4);
// //console.log(typeof x4);
// let resComparison2 = x == x2;
// let resComparison3 = x != x2;
// console.log(resComparison2);
// console.log(resComparison3);

// let myComp = 33 <= 100;

// //operators logical
// let t1 = true;
// let t2 = false;
// let logicOper = t1 && t2;
// console.log(logicOper);

// let xr = 2;
// let yr = 9;

// let logic = xr > 3 && yr < 10;
// console.log(logic);

// let logic2 = xr == 2 || yr <= 8;
// console.log(logic2);

// let logic3 = !(xr == 5);
// console.log(logic3);

//String operetions
let strExample = `I'll try to do it`;
let lxStr = strExample.length;
console.log(lxStr);
console.log(strExample);

let lx2 = strExample.slice(5, 17);
lx2 = lx2.toUpperCase();
console.log(lx2);

let n = `'ll try to`;
strExample = strExample.replace(n, " can"); //not change the string
let lx3 = strExample.replace(`'ll try to`, " can"); //change the string
lx3 = lx3.toLocaleLowerCase();
console.log(lx3);

let txtConcat = lx3.concat(" ", n);
console.log(txtConcat);
let txtWithTrash = "   original text   ";
txtWithTrash = txtWithTrash.trim();
console.log(txtWithTrash);
