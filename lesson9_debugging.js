const fetch = require("node-fetch");
const fs = require("fs-extra");

let arrName = [];
async function readJsinAndWhriteName(path) {
  let jsonData = await fs.readJSON(path);
  for (const el of jsonData.data) {
    arrName.push(el["first_name"]);
  }
  console.log(arrName);

  await fs.writeJSON("names.json", JSON.stringify(arrName));
}

//readJsinAndWhriteName();

async function getDataRequres() {
  let response = await fetch("https://reqres.in/api/users?page=2&per_page=5");
  data = await response.json();
  await fs.writeFile("responseReqres.json", JSON.stringify(data));
}

//getDataRequres();

//readJsinAndWhriteName("responseReqres.json");

const dataUser = {
  username: "Frank",
  email: "frank@gmail.com",
  password: "Qwe123@#$",
};

async function createUser(data) {
  try {
    const response = await fetch("https://reqres.in/api/user/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const statusCode = await response.status;
    const dataResponse = await response.json();

    console.log(statusCode);
    console.log(dataResponse);
  } catch (error) {
    console.log(error);
  }
}

createUser(dataUser);
