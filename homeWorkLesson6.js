const fs = require("fs-extra");
const path = require("./homeWorkLesson6.json");

//create a function that takes one param and inside makes the value Uppercase - if the parameter not string type - console message about the incorrect type of data.

function stringUpper(value) {
  if (typeof value === "string") {
    value.toUpperCase;
    console.log(value);
  } else {
    console.log("Entered value is not in String format");
  }
}

stringUpper("hello world");
stringUpper(777);

// create js function that add properties for the object, allowing only number

let obj = {};

function addPropToObject(obj, propertyName, propertyValue) {
  if (typeof propertyValue === "number") {
    obj[propertyName] = propertyValue;
    console.log(obj);
  } else {
    console.log(
      `Entered property value for '${propertyName}' is not in Number format`
    );
  }
}
addPropToObject(obj, "propName1", 72);

//create JS object with 5 different properties

const myObject = {
  firstName: "Dmytro",
  lastName: "Kosenko",
  city: "Kyiv",
  hasDog: false,
  hobbies: ["Reading", "Chess"],
};

//with previously created function add a new property

addPropToObject(myObject, "age", 32);

//check the function syntax and if some issues propose →  let sum == function{a, b} (return a + b;)

let sum = function (a, b) {
  return a + b;
};

console.log(sum(1, 3));

//create a custom implementation of reading/writing from/to a json file with 'fs-exrta'

//reading from JSON
fs.readFile("./homeWorkLesson6.json", "utf8", (err, path) => {
  if (err) {
    console.log(`Error reading file`);
  } else {
    const dataFromJsonFile = JSON.parse(path);
    console.log(dataFromJsonFile);
  }
});

//writing to JSON
const dataToFile = JSON.stringify(path);
const pathToJson = "./homeWorkLesson6.json";

fs.writeFile("./homeWorkLesson6.json", dataToFile, "utf8", (err) => {
  if (err) {
    console.log(`Error writing file: ${err}`);
  } else {
    const data = JSON.parse(dataToFile);
    data.address = "Address";
    data.email = "myEmail@gmail.com";
    fs.writeFile(pathToJson, JSON.stringify(data));
    console.log(`File is written successfully!`);
    console.log(data);
  }
});
