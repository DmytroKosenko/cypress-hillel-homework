const fetch = require("node-fetch");
const apiDomain = "https://reqres.in";

//-- first variant
//install with yarn https://www.npmjs.com/package/node-fetch
//send a request to get data from https://reqres.in/api/users?page=1&per_page=5
//save the response in the json file

//path constructor
function requestConstructor(path) {
  let validPath = apiDomain.concat(path);
  return validPath;
}

//pathes
const getUserPath = "/api/users?page=1&per_page=5";
const getProductsPath = "/api/unknown";
const addUserPath = "/api/users";

//get data function
async function getData(path) {
  const response = await fetch(requestConstructor(path));
  const dataToJson = await response.json();
  console.log(dataToJson);
}

//get users
getData(getUserPath);

//get products
getData(getProductsPath);

//new user data
const newUser = {
  name: "morpheus",
  job: "leader",
};

//create function
async function createUser(path, newUser) {
  const response = await fetch(requestConstructor(path), {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseData = await response.json();
  console.log(responseData);
}

createUser(addUserPath, newUser);

//-- second variant
//use the file from the attachments
//create a function with actions: read the json.file => iterate and save all names into array

const fs = require("fs-extra");
const pathToJson = "./homeWorkLesson8_users.json";

function saveJsonDataToArray(data) {
  fs.readFile(data, "utf8", (err, path) => {
    if (err) {
      console.log(`Error reading file`);
    } else {
      const dataFromJsonFile = JSON.parse(path);
      const namesArray = [];
      for (let name of dataFromJsonFile.data) {
        if (name.first_name) {
          namesArray.push(name.first_name);
        }
      }
      console.log(namesArray);
    }
  });
}

saveJsonDataToArray(pathToJson);
