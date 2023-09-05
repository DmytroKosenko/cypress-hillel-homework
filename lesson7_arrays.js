let arr1 = ["index1", "index2", "index3", true, 74, 15, "hello", false];

// let value = arr1[2];
// console.log(value);

// arr1[1] = "newIndex2";
// console.log(arr1[1]);

// let arr2 = [
//   "string1",
//   43,
//   true,
//   function () {
//     console.log("Hi from array");
//   },
// ];

// console.log(arr2[3]);

// let arrLength2 = arr2.length;
// console.log(arrLength2);

// console.log(arr2.at(-2));

let arrLength1 = arr1.length;
console.log(arrLength1);

//work with array

// let result = [];
// let resultWithUpperCase = [];

// for (let i = 0; i < arr1.length; i++) {
//   if (typeof arr1[i] === "string") {
//     result.push(arr1[i]);
//   }
// }

// for (let y = 0; y < result.length; y++) {
//   let word = result.at(y);
//   let firstLetter = String(word[0]).toUpperCase();
//   let restLetter = String(word.slice(3));
//   resultWithUpperCase.push(firstLetter + restLetter);
// }

// console.log(resultWithUpperCase);

//previouse realization as a function

async function getOnlyString(baseArr) {
  let result = [];
  let resultWithUpperCase = [];

  for (let i = 0; i < baseArr.length; i++) {
    if (typeof arr1[i] === "string") {
      await result.push(baseArr[i]);
    }
  }

  for (let y = 0; y < result.length; y++) {
    let word = result.at(y);
    let firstLetter = await String(word[0]).toUpperCase();
    let restLetter = await String(word.slice(3));
    await resultWithUpperCase.push(firstLetter + restLetter);
  }
  console.log(resultWithUpperCase);
}

getOnlyString(arr1);
