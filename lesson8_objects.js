const objMy = { name: "Dmytro", lastName: "Kosenko", age: "32" };
const testData1 = { url1: "url_1", userName1: "name_1", age: "age_33" };
const testData2 = { url2: "url_2", userName2: "name_2", age: "age_34" };

console.log(Object.keys(testData1));
testData1.pass = "Pass1";
console.log(Object.keys(testData1));

console.log(Object.values(testData1));

//use for in → for objects
for (const key in testData1) {
  const element = testData1[key];
  console.log(element);
}

//show key and value by using for in
for (const key in testData2) {
  console.log(`${key}: ${testData2[key]}`);
}

const myObj2 = {
  url3: "url_3",
  userName3: "name_3",
  getThisProp() {
    return this.url3;
  },
};

let getValueFromObj = myObj2.getThisProp();
console.log(getValueFromObj);

function getAllProp() {
  return this;
}

objMy.getAllProp = getAllProp;
myObj2.getAllProp = getAllProp;

console.log(objMy.getAllProp());
console.log(myObj2.getAllProp());

//use prototype
function addPropColor() {
  this.color = "red";
}
addPropColor.prototype = objMy;
const objMy2 = new addPropColor();
console.log(Object.values(objMy2));

// receive data from object which contains other object and array by using 'dot'
const myObj3 = {
  url3: "url_3",
  userName3: "name_3",
  getThisProp() {
    return this.url3;
  },
  server: {
    url: "127.0.0.1",
    protocol: "https",
    showFullAddress() {
      return this.protocol + "://" + this.url;
    },
  },
  mailAddressArr: [
    {
      mail_server: "gmail",
      mail_user: "blah_blah",
      mail_pass: "1234567890",
    },
  ],
};
