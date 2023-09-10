//create array with 10 elements

let myArray = [
  1,
  2,
  3,
  "fourthElement",
  true,
  function () {
    console.log("It is one of arrays elements");
  },
  74,
  false,
  {
    url: "myUrl",
    address: "myAddress",
  },
  101,
];

console.log(myArray);

//create a function that will add value to array under index 500

let value1 = "valueToArray";
let arr1 = [1, 3, 6, true, 890, "hello", 234];

function addValueToArraIn_500_Index(arr, value) {
  // for checking it in console, you can try to check if array has less then 11 elements and try to add new element to index 10
  if (arr.length < 501) {
    const addMoreValues = 501 - arr.length;

    for (let i = 0; i < addMoreValues; i++) {
      arr.push(Math.floor(Math.random() * 11));
    }
  }

  arr[500] = value;

  console.log(arr);
}

addValueToArraIn_500_Index(arr1, value1);

//create a function with for inside and conditions to create two new arrays - one with string elements only, another only with numbers
//doesn't matter async or not function

let arr2 = [
  101,
  "element1",
  202,
  false,
  303,
  "element2",
  404,
  "element53",
  false,
  "element4",
  505,
  "element5",
  true,
];

function parseArray(arr) {
  let onlyNumberArr = [];
  let onlyStringArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      onlyNumberArr.push(arr[i]);
    } else if (typeof arr[i] === "string") {
      onlyStringArr.push(arr[i]);
    }
  }
  return { strings: onlyStringArr, numbers: onlyNumberArr };
}

const result = parseArray(arr2);
console.log("StringS:", result.strings);
console.log("NumberS:", result.numbers);
