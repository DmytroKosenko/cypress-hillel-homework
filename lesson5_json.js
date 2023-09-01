const values = require("./values.json");
const fs = require("fs-extra");
const { writeFile, readFile } = require("fs");

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

const path = "./values.json"; // path to json file
const newData = { phone: 4412345678, address: "Street" }; // new data in object format that we will add to json file
// fs.writeFile(path, JSON.stringify(newData)); //method for adding data, with two parameters → path and data that meda as json format befor adding

readFile(path, (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const parsedData = JSON.parse(data);
  parsedData.createdAt = new Date().toISOString();
  writeFile(path, JSON.stringify(parsedData, null, 2), (err) => {
    if (err) {
      console.log("Failed to write updated data to file");
      return;
    }
    console.log("Updated file successfully");
  });
});

let data, jsonData;
try {
  if (fs.existsSync(path)) {
    data = fs.readFileSync(path, "utf8");
    if (data) {
      jsonData = JSON.parse(data);
      if (
        typeof jsonData === "object" &&
        jsonData !== null &&
        !Array.isArray(jsonData)
      )
        jsonData.test = "test";
      jsonData.email = "test@gmail.com";
      fs.writeFileSync(path, JSON.stringify(jsonData));
    } else {
      throw new Error("Parsed JSON data is not an Object");
    }
  } else {
    throw new Error("No data read from the file");
  }
  //     } else {
  //         throw new Error("File does not exist");
  //     }
} catch (err) {
  console.error(err.message);
}
