//abstract class
class Human {
  constructor() {
    if (this.constructor == Human) {
      throw new Error("it is abstract class");
    }
  }
  eat() {
    console.log("eating");
  }
  listen() {
    console.log("lstening");
  }
}

class User extends Human {
  arms = 2;
  static planet = "Earth";
  #legs = 2; // private
  fingers = 10;

  constructor(name, legs, arms, fingers) {
    this.name = name;
    this.#legs = legs;
    this.arms = arms;
    this.fingers = fingers;
  }
  sayHello() {
    console.log("hello");
  }

  get getName() {
    return this.name;
  }

  setName(value) {
    if (value.length < 5 && typeof value !== "string") {
      throw new Error("please, filol only letters");
    }
    this._name = value;
  }
}

class Student extends User {
  mark = 5;

  speak() {
    console.log("Yes, I know answer");
  }
}

class SchoolStudent extends Student {
  speak() {
    super.speak();
    console.log("My answer very short");
  }
}

let student1 = new Student("jenkins", 2, 2);
console.log(student1.getName);
student1.speak();

let student2 = new SchoolStudent("travis", 2, 2);
console.log(student2.getName);
student2.speak();

let student3 = new SchoolStudent("garry", 2, 2, 9);
console.log(student3.getName);
console.log(student3.fingers);
student3.fingers = 4;
console.log(student3.fingers);

//class type
//console.log(typeof User);

//call class method by using 'new' word
//new User().sayHello();

//assign class to variable and call method
// const user_2 = new User();
// user_2.sayHello();

// console.log(user_2.arms);

//doesn't work
// let user_4 = new User(3456789);
// let nameD = user_4.getName;
// console.log(nameD);

// let user_3 = new User("Birdss");
// let nameB = user_3.getName;
// console.log(nameB);

// console.log(nameB.planet); //static method not available to inherited classes
// console.log(User.planet);

// user_3.arms = 3;
// console.log(user_3.arms);

// let user_4 = new User("Birdss", 22, 2); //try to change private method 'legs' in the class returned 'undefined'
// let nameE = user_4.getName;
// console.log(nameE);
// console.log(nameE.planet);
// console.log(nameE.legs);
