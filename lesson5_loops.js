let num215 = 215;

if (num215 == 215) {
  console.log("yes. value under condition");
  console.log("1");
  console.log("2");
}

if (num215 >= 215 && num215 < 250) {
  console.log("second condition works");
}

if (num215 > 300 && num215 < 250) {
  console.log("second condition works");
} else {
  console.log("code goes to the else");
}

if (num215 > 300) {
  console.log("num215 variable grather than 300");
} else if (num215 >= 250) {
  console.log("num215 greather than 250");
} else if (num215 >= 200) {
  console.log("num215 greather than 200");
} else if (Number.isInteger(num215)) {
  console.log("num215 is integer");
} else {
  console.log("code goes to the else");
}

//ternary operators
num215 >= 250
  ? console.log("num215 greather than 250")
  : console.log("num215 less than 250");

//while
let num = 1;

while (num <= 7) {
  console.log(num);
  num++;
}

//do while

let num2 = 1;

do {
  console.log(num2);
  num2++;
} while (num2 <= 7);

//for

let num3 = 10;

for (let i = 0; i < num3; i += 2) {
  console.log(i);
}

let num4 = 10;
let sumOfLoop = 0;

for (let i = 0; i <= num4; i += 2) {
  console.log(i);
  if (i == 6) break;
  sumOfLoop += i;
}
console.log(sumOfLoop);

let num5 = 10;
let sumOfLoop2 = 0;

for (let i = 0; i <= num5; i += 2) {
  console.log(i);
  if (i == 6) continue;
  sumOfLoop2 += i;
}
console.log(sumOfLoop2);

//for in / for of

//for in → for Objects
//for of → for Arrays

const obj1 = { prop1: 1, prop2: 2, prop3: 3 };

for (let prop in obj1) {
  console.log(prop);
  console.log(`${obj1[prop]}`);
  if (`${obj1[prop]}` == "New") {
    console.log("new");
  }
}

const arr1 = ["valarr1", "valarr2", "valarr3"];

for (let valOfArr of arr1) {
  console.log(valOfArr);
}
