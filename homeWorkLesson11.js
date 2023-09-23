//Create a function that receives one parameter.
//Check if a given string has all symbols in upper case. If the string is empty or doesn't have any letter in it - the function should return false.

const regExCheckUpper = /^[A-Z]+$/;
const regExCheckLetter = /[A-Za-z]+/;

function stringUpper(str) {
  if (str === null || str === undefined || !regExCheckLetter.test(str)) {
    console.log(false);
  } else if (regExCheckUpper.test(str)) {
    console.log(true);
  }
}

stringUpper(null);
stringUpper(undefined);
stringUpper("");
stringUpper("abcdef");
stringUpper(123456);
stringUpper("QwErTyU");
stringUpper("!@#$%^&*");
stringUpper("QWERTY");
