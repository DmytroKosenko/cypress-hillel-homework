const values = require("./values.json");

let obj1 = { firstName: "dmytro", lastName: "kosenko", age: 32 };
console.log(obj1);

let jsonObj = JSON.stringify(obj1);
console.log(jsonObj);

let obj2 = '{"firstName":"dmytro","lastName":"kosenko","age":32}';
console.log(obj2);
let jsonParse = JSON.parse(obj2);
console.log(jsonParse.firstName);

jsonParse.city = "Kyiv";
console.log(jsonParse);

console.log(values);
